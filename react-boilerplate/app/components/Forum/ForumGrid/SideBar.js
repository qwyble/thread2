import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Menu } from 'semantic-ui-react';

const SideBar = props => (
  <div>
    <Sidebar
      inverted
      vertical
      icon="labeled"
      animation="push"
      width="thin"
      as={Menu}
      visible={props.visible}
    >
      {props.children}
    </Sidebar>
  </div>
);

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
};

export default SideBar;
