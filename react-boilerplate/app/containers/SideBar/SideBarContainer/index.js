import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react';


import { compose }  from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';

import CategoryContainer from 'containers/sideBar/CategoryContainer';
import CategoryListHeader from 'components/SideBar/SidebarHeader';
import PlaylistContainer from 'container/SideBar/PlaylistContainer';

import {
  makeSelectVisibility,
} from './selectors';
import { makeSelectIsOwner, makeSelectProfile } from '../../../appUtilities/ProfileContext/selectors';

import { toggleVisibility } from './actions';

import reducer from './reducer';


const SideBar = props => (
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
          visible={this.props.visible}
        >

          <CategoryListHeader owner={props.owner} isOwner={props.isOwner} />

          <CategoryContainer isOwner={props.isOwner} />

        </Sidebar>
        <Sidebar.Pusher className="pusherContainer">

          <Button
            icon
            inverted
            color="blue"
            attached="right"
            className="sidebarButton"
            onClick={props.toggleVisibility}>
            <Icon name={props.visible ? 'left arrow' : 'right arrow'}/>
          </Button>

          <PlaylistContainer />

        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>

  </div>
);


SidebarLeftOverlay.propTypes = {
  toggleVisibility: PropTypes.func,
  isOwner: PropTypes.bool,
  visible: PropTypes.bool,
  owner: PropTypes.object,
}


const mapStateToProps = createStructuredSelector({
  visible: () => makeSelectVisibility(),
  isOwner: () => makeSelectIsOwner(),
  owner: () => makeSelectProfile(),
});

const mapDispatchToProps = { toggleVisibility }

const withReducer = injectReducer({ key: 'SideBar', reducer });

const withConnect = connect({
  mapDispatchToProps,
  mapStateToProps,
});

export default compose({
  withReducer,
  withConnect,
})(SidebarLeftOverlay);
