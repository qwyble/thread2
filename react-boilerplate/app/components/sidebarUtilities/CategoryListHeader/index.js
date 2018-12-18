import React from 'react';
import PropTypes from 'prop-types';

const CategoryListHeader = props => (
  <div>
    {props.owner ?
      (
        <Menu.Item style={{ color: '#54c8ff' }}>
          {
            !props.isOwner ?
              (
                <div>
                  {props.owner.userName}
                  's playlists:
                </div>
              )
              : <div>Your playlists:</div>
          }
        </Menu.Item>
      )
      : <div></div>
    }
  </div>
);

CategoryListHeader.propTypes = {
  owner: PropTypes.object,
  isOwner: PropTypes.bool,
};

export default index;
