import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Button, Menu, Icon, Loader } from 'semantic-ui-react';


import { compose }  from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import CategoryMapper from 'containers/sideBarUtils/CategoryMapper';
import WrappedPlaylistController from 'components/sidebarUtilities/wrappedPlaylistController';

import {
  makeSelectIsLoading,
  makeSelectVisibility,
  makeSelectPlaylistParam,
} from './selectors';
import { makeSelectIsOwner, makeSelectProfile } from '../../../appUtilities/ProfileContext/selectors';

import {
  toggleVisibility,
  setPlaylist,
} from './actions';

import reducer from './reducer';
import saga from './saga';

import AddCategory from '../addCategory';


class SidebarLeftOverlay extends Component {

  componentDidMount() {
    this.props.setPlaylist(this.props.playlistParam);
  }

  render() {
    return (
      <div>
        <div>
          <Sidebar.Pushable as={Segment} className='primaryContainer'>
            <Sidebar
              inverted
              vertical
              width="thin"
              icon="labeled"
              animation="push"
              as={Menu}
              visible={this.state.visible}>

              {this.props.owner ?
                (
                  <Menu.Item style={{color: '#54c8ff'}}>
                    {
                      !this.props.isOwner ?
                        (
                          <div>
                            {this.props.owner.userName}
                            's playlists:
                          </div>
                        )
                        : <div>Your playlists:</div>
                    }
                  </Menu.Item>
                )
                : <div></div>
              }


              <div>
                <CategoryMapper />
                <div>
                  {this.props.isLoading ?
                    <Loader active />
                    : (
                      <div>
                        {this.props.isOwner ?
                          <AddCategory />
                          : <div></div>}
                      </div>
                    )
                  }
                </div>
              </div>


            </Sidebar>
            <Sidebar.Pusher className="pusherContainer">

              <Button
                icon
                inverted
                color="blue"
                attached="right"
                className="sidebarButton"
                onClick={this.props.toggleVisibility}>
                <Icon name={this.props.visible ? 'left arrow' : 'right arrow'}/>
              </Button>

              <WrappedPlaylistController />

            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>

      </div>
    );
  }
}


SidebarLeftOverlay.propTypes = {
  toggleVisibility: PropTypes.func,
  playlistParam: PropTypes.string,
  categories: PropTypes.object,
  setPlaylist: PropTypes.func,
  isLoading: PropTypes.bool,
  isOwner: PropTypes.bool,
  visible: PropTypes.bool,
  owner: PropTypes.object,
}


const mapStateToProps = createStructuredSelector({
  playlistParam: () => makeSelectPlaylistParam(),
  isLoading: () => makeSelectIsLoading(),
  visible: () => makeSelectVisibility(),
  isOwner: () => makeSelectIsOwner(),
  owner: () => makeSelectProfile(),
});

const mapDispatchToProps = {
  toggleVisibility,
  setPlaylist,
}

const withReducer = injectReducer({ key: sideBar, reducer });
const withSaga = injectSaga({ key: sideBar, saga });

const withConnect = connect({
  mapDispatchToProps,
  mapStateToProps,
});

export default compose({
  withSaga,
  withReducer,
  withConnect,
})(SidebarLeftOverlay);
