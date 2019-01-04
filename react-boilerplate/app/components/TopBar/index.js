import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UploadButton from 'components/Uploader/UploadButton';
import SearchBar from 'containers/search/searchBar';

/* Top bar renders components for uploading songs,
sending messages, and navigating the app. */

const TopBar = props => (
  <div>
    <Menu inverted className="topBar">
      <Menu.Item link name="home">
        <Link to="/">
          <img src={props.logo} className="App-logo" alt="logo" />
          Home
        </Link>
      </Menu.Item>

      <Menu.Item link name="stream">
        <Link to="/stream">
          <Icon name="sound" />
          Stream
        </Link>
      </Menu.Item>

      <Menu.Item link name="profile">
        <Link to="/edit">
          <Icon name="user circle outline" />
          Profile
        </Link>
      </Menu.Item>

      <Menu.Item link name="upload">
        <UploadButton />
      </Menu.Item>

      <Menu.Item link name="explore">
        <Link to="/explore">
          <Icon name="search" />
          Explore
        </Link>
      </Menu.Item>

      <Menu.Item link name="users">
        <Link to="/followers">
          <Icon name="users" />
          Followers
        </Link>
      </Menu.Item>

      <Menu.Item link name="following">
        <Link to="/following">
          <Icon name="flag" />
          Following
        </Link>
      </Menu.Item>

      <Menu.Item link name="forums">
        <Link to="/forum">
          <Icon name="browser" />
          Forums
        </Link>
      </Menu.Item>

      <Menu.Item link name="messages">
        <Link to="/messages">
          <Icon name="mail" />
          Messages
        </Link>
      </Menu.Item>

      <Menu.Item link name="chat">
        <Link to="/logout">Logout</Link>
      </Menu.Item>

      <Menu.Item link name="search" position="right">
        <SearchBar />
      </Menu.Item>
    </Menu>
  </div>
);

TopBar.propTypes = {
  logo: PropTypes.string,
};

export default TopBar;
