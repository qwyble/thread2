import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Menu } from 'semantic-ui-react';

import IsOwner from 'containers/Wrappers/IsOwner';
import Playlist from 'components/SideBar/Playlists/Playlist';
import AddPlaylist from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/AddPlaylist';
import EditPlaylistPortal from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/EditPlaylistPortal';

import { setPlaylist } from 'containers/SideBar/PlaylistContainer/actions';
import { setEditedPlaylist } from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/EditPlaylistPortal/actions';
import { makeSelectPlaylistParam } from 'containers/AppUtilities/ProfileContext/selectors';

import { makeSelectSelectedPlid } from './selectors';
import { getPlaylist } from './actions';

class PlaylistContainer extends React.Component {
  componentDidMount() {
    if (this.props.playlistParam) {
      this.props.getPlaylist();
    }
  }

  render() {
    return (
      <Menu.Menu>
        {this.props.playlists.map(playlist => (
          <Playlist
            key={playlist.get('plid')}
            playlist={playlist}
            onSetPlaylist={this.props.setPlaylist}
            selectedPlid={this.props.selectedPlid}
            onSetEditedPlaylist={this.props.setEditedPlaylist}
          />
        ))}
        <IsOwner>
          <AddPlaylist />
          <EditPlaylistPortal />
        </IsOwner>
      </Menu.Menu>
    );
  }
}

PlaylistContainer.propTypes = {
  setPlaylist: PropTypes.func.isRequired,
  playlists: PropTypes.object.isRequired,
  selectedPlid: PropTypes.number,
  setEditedPlaylist: PropTypes.func.isRequired,
  playlistParam: PropTypes.string,
  getPlaylist: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  selectedPlid: makeSelectSelectedPlid(),
  playlistParam: makeSelectPlaylistParam(),
});

const mapDispatchToProps = {
  setPlaylist,
  setEditedPlaylist,
  getPlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(PlaylistContainer);
