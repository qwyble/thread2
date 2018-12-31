import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';

import CategoryContainer from 'containers/SideBar/CategoryContainer';
import CategoryListHeader from 'components/SideBar/SidebarHeader';
import SongsContainer from 'containers/SongsContainer/SongsContainer';

import { makeSelectProfile } from 'containers/AppUtilities/ProfileContext/selectors';
import { makeSelectVisibility } from './selectors';

import { toggleVisibility } from './actions';

import reducer from './reducer';

const SideBar = props => (
  <div>
    <div>
      <Sidebar.Pushable as={Segment} className="primaryContainer">
        <Sidebar
          inverted
          vertical
          width="thin"
          icon="labeled"
          animation="push"
          as={Menu}
          visible={props.visible}
        >
          <CategoryListHeader owner={props.owner} />

          <CategoryContainer />
        </Sidebar>
        <Sidebar.Pusher className="pusherContainer">
          <Button
            icon
            inverted
            color="blue"
            attached="right"
            className="sidebarButton"
            onClick={props.toggleVisibility}
          >
            <Icon name={props.visible ? 'left arrow' : 'right arrow'} />
          </Button>
          <SongsContainer />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  </div>
);

SideBar.propTypes = {
  toggleVisibility: PropTypes.func,
  visible: PropTypes.bool,
  owner: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  visible: () => makeSelectVisibility(),
  owner: () => makeSelectProfile(),
});

const mapDispatchToProps = { toggleVisibility };

const withReducer = injectReducer({ key: 'SideBar', reducer });

const withConnect = connect({
  mapDispatchToProps,
  mapStateToProps,
});

export default compose({
  withReducer,
  withConnect,
})(SideBar);
