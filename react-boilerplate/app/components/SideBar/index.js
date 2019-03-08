import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';

import CategoryContainer from 'containers/SideBar/CategoryContainer';
import CategoryListHeader from 'components/SideBar/SidebarHeader';
import SongsContainer from 'containers/SongsContainer/SongsContainer';

const SideBar = props => (
  <Sidebar.Pushable as={Segment} className="primaryContainer">
    <Sidebar
      inverted
      vertical
      width="thin"
      icon="labeled"
      animation="push"
      as={Menu}
      visible
    >
      <CategoryListHeader owner={props.owner} />
      <CategoryContainer />
    </Sidebar>
    <Sidebar.Pusher className="pusherContainer">
      <SongsContainer />
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

SideBar.propTypes = {
  owner: PropTypes.object.isRequired,
};

export default SideBar;
