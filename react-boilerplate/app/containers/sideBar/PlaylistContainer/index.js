import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Menu, Loader} from 'semantic-ui-react';

import Playlist from 'components/sidebarUtilities/Playlist';
import AddPlaylist from 'components/sidebarUtilities/AddPlaylist';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { makeSelectDisplayLists, makeSelectIsLoading } from './selectors';
import { makeSelectIsOwner } from '../../../appUtilities/ProfileContext/selectors';

import AnimationWrapper from './AnimationWrapper';

import {
  deletePlaylist,
  selectPlaylist,
  editPlaylist,
  addPlaylist,
} from './actions';



class PlaylistContainer extends React.PureComponent {

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
                onEditPlaylist={}
              />
            </Menu.Item>
          ))}
          {this.props.isLoading ?
            (
              <Menu.Item style={{ padding: "1em 1em" }}>
                <Loader active inverted size="mini" />
              </Menu.Item>
            ) : <div>{this.props.isOwner ? <AddPlaylist /> : <div />}</div>}
        </Menu.Menu>
      </AnimationWrapper>
    )
  }
}

PlaylistContainer.propTypes = {
  displayLists: PropTypes.bool,
  playlists: PropTypes.array,
  isOwner: PropTypes.bool,
  isLoading: PropTypes.bool,
  deletePlaylist: PropTypes.func,
  selectPlaylist: PropTypes.func,
  editPlaylist: PropTypes.func,
  addPlaylist: PropTypes.func,
}

const mapStateToProps = () => createStructuredSelector({
  isOwner: () => makeSelectIsOwner(),
  isLoading: () => makeSelectIsLoading(),
  displayLists: () => makeSelectDisplayLists(),
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
