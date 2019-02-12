import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Menu } from 'semantic-ui-react';

import IsSideBarOwner from 'containers/Wrappers/IsSideBarOwner';

import Playlist from 'components/SideBar/Playlists/Playlist';
import AddPlaylist from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/AddPlaylist';
import { setPlaylist } from 'containers/SideBar/SideBarContainer/actions';

import injectReducer from 'utils/injectReducer';

import reducer from './reducer';

class PlaylistContainer extends React.PureComponent {
  handleSetPlaylist = (e, d) => {
    this.props.setPlaylist(d.playlist);
  };

  render() {
    return (
      <Menu.Menu>
        {this.props.playlists.map((playlist, key) => (
          <Menu.Item key={key} className="playlistTab">
            <Playlist
              key={key}
              id={playlist.plid}
              playlist={playlist}
              onSetPlaylist={this.handleSetPlaylist}
            />
          </Menu.Item>
        ))}
        <IsSideBarOwner>
          <AddPlaylist />
        </IsSideBarOwner>
      </Menu.Menu>
    );
  }
}

PlaylistContainer.propTypes = {
  setPlaylist: PropTypes.func,
  playlists: PropTypes.object.isRequired,
};

const mapStateToProps = {};

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
