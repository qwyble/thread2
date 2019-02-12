import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Icon, Popup } from 'semantic-ui-react';

require('./css.css');

const Users = props => (
  <div className="container">
    <div className="row">
      {props.users.map((user, key) => (
        <div className="col-2 padded-col">
          <div className="row">
            <img
              style={{ height: '100px', maxWidth: 'auto' }}
              src={user.get('imageUrl')}
              alt=""
            />
          </div>
          <div className="row">
            <Link
              to={{
                pathname: `/profile/${user.get('idUsers')}`,
              }}
            >
              {user.get('userName')}
            </Link>
          </div>
          <div className="row">
            <Popup
              trigger={<Icon name="list" />}
              content={`${user.get('playlistsCount')} playlist(s).`}
            />
            {user.get('playlistsCount')}
            <Popup
              trigger={<Icon name="music" />}
              content={`${user.get('songsCount') || '0'} song(s).`}
            />
            {user.get('songsCount') || 0}
          </div>
        </div>
      ))}
    </div>
  </div>
);

Users.propTypes = {
  users: PropTypes.object,
};

export default Users;
