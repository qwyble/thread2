import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';

const SidebarHeader = props => (
  <div>
    {props.owner ? (
      <Link to={`/profile/${props.owner.idUsers}`}>
        <Menu.Item link style={{ color: '#54c8ff' }}>
          <Image src={props.owner.imageUrl} floated="left" size="mini" spaced />
          <div>{props.owner.userName}</div>
        </Menu.Item>
      </Link>
    ) : (
      <div />
    )}
  </div>
);

SidebarHeader.propTypes = {
  owner: PropTypes.object,
};

export default SidebarHeader;
