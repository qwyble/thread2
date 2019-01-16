import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Icon, Popup, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Users = props => (
  <Grid.Row>
    {props.users.map((user, key) => (
      <Grid.Column key={key}>
        <Grid.Row>
          <Image size="small" src={user.imageUrl} />
        </Grid.Row>
        <Grid.Row>
          <Link
            to={{
              pathname: `/profile/${user.idUsers}`,
            }}
          >
            {user.userName}
          </Link>
        </Grid.Row>
        <Grid.Row columns={2}>
          <List horizontal>
            <List.Item>
              <Popup
                trigger={<Icon name="list" />}
                content={`${user.playlistsCount} playlist(s).`}
              />
              {user.playlistsCount}
            </List.Item>
            <List.Item>
              <Popup
                trigger={<Icon name="music" />}
                content={`${user.songsCount || '0'} song(s).`}
              />
              {user.songsCount || 0}
            </List.Item>
          </List>
        </Grid.Row>
      </Grid.Column>
    ))}
  </Grid.Row>
);

Users.propTypes = {
  users: PropTypes.object,
};

export default Users;
