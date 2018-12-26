import React from 'react';
import PropTypes from 'prop-types';

const SidebarHeader = props => (
  <div>
    {props.owner ? (
      <Menu.Item style={{ color: '#54c8ff' }}>
        <IsOwner
          alt={
            <div>
              {props.owner.userName}
              's playlists:
            </div>
          }
        >
          <div>Your Playlists</div>
        </IsOwner>
      </Menu.Item>
    ) : (
      <div />
    )}
  </div>
);

SidebarHeader.propTypes = {
  owner: PropTypes.object,
  isOwner: PropTypes.bool,
};

export default SidebarHeader;
