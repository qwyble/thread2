import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Icon, Popup } from 'semantic-ui-react';

require('./css.css');

const Users = props => (
  <div className="container users-container">
    <div className="row">
      {props.users.map((user, key) => (
        <div className="col-3 users-column" key={key}>
          <div className="row">
            <div className="col">
              <img
                style={{ height: '100px', maxWidth: 'auto' }}
                src={user.get('imageUrl')}
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link
                to={{
                  pathname: `/profile/${user.get('idUsers')}`,
                }}
              >
                {user.get('userName')}
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
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
        </div>
      ))}
    </div>
  </div>
);

Users.propTypes = {
  users: PropTypes.object,
};

export default Users;
