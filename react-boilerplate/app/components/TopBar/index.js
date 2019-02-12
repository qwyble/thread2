import React from 'react';
import PropTypes from 'prop-types';

import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import UploadButton from 'components/Uploader/UploadButton';
import SearchBar from 'containers/Search/SearchBar';

require('./css.css');

/* Top bar renders components for uploading songs,
sending messages, and navigating the app. */

const TopBar = props => (
  <Menu inverted className="topBar">
    <Menu.Item link name="home" className="top-item">
      <Link to="/">
        <img src={props.logo} className="App-logo" alt="logo" />
        Home
      </Link>
    </Menu.Item>

    <Menu.Item link name="stream" className="top-item">
      <Link to="/stream">
        <Icon name="sound" />
        Stream
      </Link>
    </Menu.Item>

    <Menu.Item link name="profile" className="top-item">
      <Link to="/edit">
        <Icon name="user circle outline" />
        Profile
      </Link>
    </Menu.Item>

    <Menu.Item link name="upload" className="top-item">
      <UploadButton />
    </Menu.Item>

    <Menu.Item link name="explore" className="top-item">
      <Link to="/explore">
        <Icon name="search" />
        Explore
      </Link>
    </Menu.Item>

    <Menu.Item link name="users" className="top-item">
      <Link to="/followers">
        <Icon name="users" />
        Followers
      </Link>
    </Menu.Item>

    <Menu.Item link name="following" className="top-item">
      <Link to="/following">
        <Icon name="flag" />
        Following
      </Link>
    </Menu.Item>

    <Menu.Item link name="forums" className="top-item">
      <Link to="/forum">
        <Icon name="browser" />
        Forums
      </Link>
    </Menu.Item>

    <Menu.Item link name="messages" className="top-item">
      <Link to="/messages">
        <Icon name="mail" />
        Messages
      </Link>
    </Menu.Item>

    <Menu.Item link name="chat" className="top-item">
      <Link to="/logout">Logout</Link>
    </Menu.Item>

    <Menu.Item name="search" position="right" className="search-bar">
      <SearchBar />
    </Menu.Item>
  </Menu>
);

TopBar.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default TopBar;
