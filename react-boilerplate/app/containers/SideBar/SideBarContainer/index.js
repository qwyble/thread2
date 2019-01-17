import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';

import CategoryContainer from 'containers/SideBar/CategoryContainer';
import SideBarHeader from 'components/SideBar/SidebarHeader';
import SongsContainer from 'containers/SongsContainer/SongsContainer';

import { makeSelectProfile } from 'containers/AppUtilities/ProfileContext/selectors';

import reducer from './reducer';

const SideBarContainer = props => (
  <div>
    <Sidebar.Pushable as={Segment} className="primaryContainer">
      <Sidebar
        inverted
        vertical
        width="thin"
        icon="labeled"
        animation="push"
        visible
        as={Menu}
      >
        <SideBarHeader owner={props.owner} />

        <CategoryContainer />
      </Sidebar>
      <Sidebar.Pusher className="pusherContainer">
        <SongsContainer />
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
);

SideBarContainer.propTypes = {
  owner: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  owner: makeSelectProfile(),
});

const withReducer = injectReducer({ key: 'SideBarContainer', reducer });

const withConnect = connect(mapStateToProps);

export default compose(
  withReducer,
  withConnect
)(SideBarContainer);
