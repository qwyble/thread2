import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Menu } from 'semantic-ui-react';

import IsSideBarOwner from 'containers/Wrappers/IsSideBarOwner';

import Playlist from 'components/SideBar/Playlists/Playlist';
import AddPlaylist from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/AddPlaylist';
import { setPlaylist } from 'containers/SideBar/PlaylistContainer/actions';

import injectReducer from 'utils/injectReducer';

import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import { makeSelectSelectedPlid } from './selectors';

class PlaylistContainer extends React.PureComponent {
  handleSetPlaylist = (e, d) => {
    this.props.setPlaylist(d.playlist);
  };

  render() {
    return (
      <Menu.Menu>
        {this.props.playlists.map(playlist => (
          <Playlist
            key={playlist.get('plid')}
            playlist={playlist}
            onSetPlaylist={this.handleSetPlaylist}
            selectedPlid={this.props.selectedPlid}
          />
        ))}
        <IsSideBarOwner>
          <AddPlaylist />
        </IsSideBarOwner>
      </Menu.Menu>
    );
  }
}

PlaylistContainer.propTypes = {
  setPlaylist: PropTypes.func.isRequired,
  playlists: PropTypes.object.isRequired,
  selectedPlid: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  selectedPlid: makeSelectSelectedPlid(),
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
