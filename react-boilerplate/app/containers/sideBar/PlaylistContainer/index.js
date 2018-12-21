import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Menu } from 'semantic-ui-react';

import Playlist from 'components/sidebarUtilities/Playlist';
import AddPlaylist from 'components/sidebarUtilities/AddPlaylist';
import IsOwner from 'containers/Wrappers/IsOwner';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { setPlaylist } from 'containers/sideBar/SideBar/actions';

import saga from './saga';
import reducer from './reducer';

import { makeSelectDisplayLists } from './selectors';

import AnimationWrapper from './AnimationWrapper';

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
const withSaga = injectSaga({ key: 'PlaylistContainer', saga });

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(PlaylistContainer);
