import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Menu } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';

import IsOwner from 'containers/Wrappers/IsOwner';
import Playlist from 'components/sidebarUtilities/Playlist';
import AddPlaylist from 'components/sidebarUtilities/AddPlaylist';
import AnimationWrapper from 'containers/Wrappers/AnimationWrapper';
import { setPlaylist } from 'containers/SideBar/SideBarContainer/actions';

import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import { makeSelectDisplayLists } from './selectors';


class PlaylistContainer extends React.PureComponent {

  render() {
    return (
      <AnimationWrapper displayLists={this.props.displayLists}>
        <Menu.Menu>
          {this.props.playlists.map((playlist, key) => (
            <Menu.Item key={key} className="playlistTab">
              <Playlist
                key={key}
                id={playlist.plid}
                playlist={playlist.plname}
                onSetPlaylist={this.props.setPlaylist}
              />
            </Menu.Item>
          ))}
          <IsOwner>
            <AddPlaylist />
          </IsOwner>
        </Menu.Menu>
      </AnimationWrapper>
    )
  }
}

PlaylistContainer.propTypes = {
  setPlaylist: PropTypes.func,
  displayLists: PropTypes.bool,
  playlists: PropTypes.array,
}

const mapStateToProps = () => createStructuredSelector({
  displayLists: () => makeSelectDisplayLists(),
});

const mapDispatchToProps = {
  setPlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'PlaylistContainer', reducer });

export default compose(
  withReducer,
  withConnect,
)(PlaylistContainer);
