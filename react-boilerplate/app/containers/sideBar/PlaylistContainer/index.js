import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Menu, Loader} from 'semantic-ui-react';

import Playlist from 'components/sidebarUtilities/Playlist';
import AddPlaylist from 'components/sidebarUtilities/AddPlaylist';
import IsOwner from 'containers/Wrappers/IsOwner';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import saga from './saga';
import reducer from './reducer';

import { makeSelectDisplayLists } from './selectors';
import { makeSelectIsOwner } from '../../../appUtilities/ProfileContext/selectors';


import AnimationWrapper from './AnimationWrapper';

import {
  deletePlaylist,
  selectPlaylist,
  editPlaylist,
  addPlaylist,
} from './actions';



class PlaylistContainer extends React.PureComponent {

  handleSelectPlaylist() {

  }

  render() {
    return (
      <AnimationWrapper displayLists={this.props.displayLists}>
        <Menu.Menu>
          {this.props.playlists.map((playlist, key) => (
            <Menu.Item key={key} className={"playlistTab"}>
              <Playlist
                key={key}
                id={playlist.plid}
                playlist={playlist.plname}
                isOwner={this.props.isOwner}
                isPublic={playlist.isPublic}
                onSetPlaylist={this.props.setPlaylist}
                onEditPlaylist={this.props.editPlaylist}
                onDeletePlaylist={this.props.deletePlaylist}
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
  deletePlaylist: PropTypes.func,
  selectPlaylist: PropTypes.func,
  editPlaylist: PropTypes.func,
  displayLists: PropTypes.bool,
  playlists: PropTypes.array,
  isOwner: PropTypes.bool,
}

const mapStateToProps = () => createStructuredSelector({
  displayLists: () => makeSelectDisplayLists(),
  isOwner: () => makeSelectIsOwner(),
});

const mapDispatchToProps = {
  deletePlaylist,
  selectPlaylist,
  editPlaylist,
  addPlaylist,
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
