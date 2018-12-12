import React from 'react';
import { Portal, Button, Menu } from 'semantic-ui-react';
import axios from 'axios';


class PlaylistPortal extends React.Component {

  state = {
    categories: [],
    _portalOpen: false,
  }

  getCats = () => {
    axios({
      method: 'get',
      url: 'https://thread-204819.appspot.com/getPlaylists',
      withCredentials: true
    }).then((categories) => {
      const catpls = categories.data.cats;
      const cats = Object.values(
        catpls.reduce( (cats, {catname, catid, plname, plid, isPublic}) => {
          const result = { ...cats };
          if (!(catid in result) ) result[catid] = { catname, catid, pls: [] };
          if (plid) result[catid].pls.push({ plname, plid, isPublic });
          return result;
        }, {})
      )
      this.setState({ categories: cats });
    });
  }

  handleAddToPlaylist = (e, data) => {
    this.setState({_portalOpen: false});
    axios({
      method: 'post',
      url: 'https://thread-204819.appspot.com/addSongsToPlaylist',
      data: {
        songs: this.props.selectedSongs,
        playlist: data.value
      },
      withCredentials: true
    }).then(() => this.props.resetSelectedSongs())
  }

  portalOpen = () => {
    if(!this.state._portalOpen) {
      this.setState({_portalOpen: true});
      this.getCats()
    }
    else this.setState({_portalOpen: false})
  }


  render() {
    return (
      <Portal
        open={this.state._portalOpen}
        trigger={(
          <Button
            disabled={this.props._disabled}
            onClick={this.portalOpen}
            size="mini"
          >
            Add to Playlist
          </Button>
        )} closeIcon>
        <Menu
          inverted
          size='mini'
          style={{
            maxHeight: '60vh', overflow: 'auto', left: '40vw', position: 'fixed', top: '20vh', zIndex: 1000,
          }}
        >
          {this.state.categories.map((cat, key) => (
            <Menu.Item key={key}>
              {cat.catname}
              <Menu.Menu>
                {cat.pls ?
                  cat.pls.map((pl, k) => {
                    return(
                      <Menu.Item
                        key={k}
                        link
                        value={pl.plid}
                        onClick={this.handleAddToPlaylist}>
                        {pl.plname}
                      </Menu.Item>
                    )
                  })
                  : <div></div>
                }
              </Menu.Menu>
            </Menu.Item>
          ))}
        </Menu>
      </Portal>
    )
  }
}

export default PlaylistPortal;
