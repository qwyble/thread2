import React from 'react';
import AddPlaylist from '../../../components/sidebarUtilities/addPlaylist.js';
import PlaylistList from '../../../components/sidebarUtilities/playlistList.js';
import EditCategories from '../editCategories.js';
import {Button, Icon, Menu } from 'semantic-ui-react';
import axios from 'axios';

/* renders the playlists in a single category,
  holds the playlists in state. (change this?)
*/

class Category extends React.Component {

  handleSelectCategory = () => {
    this.props.selectCategory(this.props.category.catid);
  }

  handleDeleteList = (e) => {
    this.setState({_loading: true});

    var data = {};
    data['catid'] = this.props.id;
    data['plid'] = e.target.id;

    axios({
      method: 'post',
      url: 'https://thread-204819.appspot.com/deletePlaylist',
      data: data,
      withCredentials: true
    }).then((result) => {
      this.getPlaylists();
      this.setState({_loading: false})
    });
  }


  render() {
    return(
      <div>
        <div>
          <div>
            <Menu.Item className='sideBarItem'>

              { this.props.isOwner ? <EditCategories /> : <div></div> }

              <Button
                icon
                inverted
                size='mini'
                color='blue'
                floated='right'
                className='button2'
                labelPosition='right'
                onClick={this.handleSelectCategory}
              >
                <Icon name={this.props.displayLists ?'down arrow' : 'right arrow'} />
                {this.props.category.catName}
              </Button>

            </Menu.Item>

            <PlaylistList
              displayLists={this.props.displayLists}
              playlists={this.props.playLists}
            />
          </div>
        </div>
      </div>
    )
  }
}

PlaylistContainer.propTypes = {
  selectCategory: PropTypes.func,
  displayLists: PropTypes.bool,
  category: PropTypes.object,
}

const mapStateToProps = () => createStructuredSelector({
  displayLists: () => makeSelectDisplayLists(),

})


export default Category;
