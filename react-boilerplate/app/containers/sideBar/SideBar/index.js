import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react';


import { compose }  from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import CategoryMapper from 'components/sidebarUtilities/CategoryMapper';
import CategoryListHeader from 'components/sidebarUtilities/CategoryListHeader';
import WrappedPlaylistController from 'components/sidebarUtilities/wrappedPlaylistController';

import {
  makeSelectIsLoading,
  makeSelectCategories,
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


class SidebarLeftOverlay extends Component {

  componentDidMount() {
    this.props.setPlaylist(this.props.playlistParam);
    this.props.getCategories();
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
              visible={this.state.visible}
            >

              <CategoryListHeader
                owner={this.props.owner}
                isOwner={this.props.isOwner}
              />

              <CategoryMapper
                isOwner={this.props.isOwner}
                isLoading={this.props.isLoading}
                categories={this.props.categories}
              />


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
  getCategories: PropTypes.func,
  categories: PropTypes.object,
  categories: PropTypes.object,
  setPlaylist: PropTypes.func,
  isLoading: PropTypes.bool,
  isOwner: PropTypes.bool,
  visible: PropTypes.bool,
  owner: PropTypes.object,
}


const mapStateToProps = createStructuredSelector({
  playlistParam: () => makeSelectPlaylistParam(),
  categories: () => makeSelectCategories(),
  isLoading: () => makeSelectIsLoading(),
  visible: () => makeSelectVisibility(),
  isOwner: () => makeSelectIsOwner(),
  owner: () => makeSelectProfile()
});

const mapDispatchToProps = {
  toggleVisibility,
  getCategories,
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
