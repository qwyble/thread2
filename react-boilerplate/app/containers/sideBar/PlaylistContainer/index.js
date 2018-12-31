import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Menu } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';

import IsOwner from 'containers/Wrappers/IsOwner';
import Playlist from 'components/SideBar/Playlists/Playlist';
import AddPlaylist from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/AddPlaylist';
import AnimationWrapper from 'containers/Wrappers/AnimationWrapper';
import { setPlaylist } from 'containers/SideBar/SideBarContainer/actions';

import injectReducer from 'utils/injectReducer';

import { makeSelectPlaylistParam } from 'containers/SideBar/SideBarContainer/selectors';
import reducer from './reducer';
import { makeSelectDisplayLists } from './selectors';

class PlaylistContainer extends React.PureComponent {
  componentDidMount() {
    const plid = this.props.playlistParam;
    if (plid) {
      const playlist = this.props.playlists.find(pl => pl.plid === plid);
      if (playlist) {
        this.props.setPlaylist(this.props.playlistParam, playlist.plname);
      }
    }
  }

  render() {
    return (
      <AnimationWrapper displayLists={this.props.displayLists}>
        <Menu.Menu>
          {this.props.playlists.map((playlist, key) => (
            <Menu.Item key={key} className="playlistTab">
              <Playlist
                key={key}
                id={playlist.plid}
                value={playlist.plname}
                onSetPlaylist={this.props.setPlaylist}
              />
            </Menu.Item>
          ))}
          <IsOwner>
            <AddPlaylist />
          </IsOwner>
        </Menu.Menu>
      </AnimationWrapper>
    );
  }
}

PlaylistContainer.propTypes = {
  setPlaylist: PropTypes.func,
  displayLists: PropTypes.bool,
  playlists: PropTypes.array,
  playlistParam: PropTypes.string,
};

const mapStateToProps = () =>
  createStructuredSelector({
    displayLists: () => makeSelectDisplayLists(),
    playlistParam: () => makeSelectPlaylistParam(),
  });

const mapDispatchToProps = {
  setPlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'PlaylistContainer', reducer });

export default compose(
  withReducer,
  withConnect
)(PlaylistContainer);
