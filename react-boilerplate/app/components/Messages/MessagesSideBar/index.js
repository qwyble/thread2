import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MessagesSideBar = props => (
  <div>
    <Sidebar
      className="messagesSidebar"
      as={Menu}
      width="thin"
      direction="left"
      visible
      icon="labeled"
      vertical
    >
      <Link to="/messages/compose">
        <Menu.Item name="compose">
          <Icon name="keyboard" />
          Compose
        </Menu.Item>
      </Link>
      <Link to="/messages/inbox" onClick={props.onGetInbox}>
        <Menu.Item name="inbox">
          <Icon name="mail" />
          Inbox
        </Menu.Item>
      </Link>
      <Link to="/messages/sent" onClick={props.onGetSent}>
        <Menu.Item name="sent">
          <Icon name="send" />
          Sent
        </Menu.Item>
      </Link>
      <Menu.Item name="delete" onClick={props.onDelete}>
        <Icon name="trash" />
        Delete
      </Menu.Item>
    </Sidebar>
  </div>
);

MessagesSideBar.propTypes = {
  onDelete: PropTypes.func,
  onGetSent: PropTypes.func,
  onGetInbox: PropTypes.func,
};
export default MessagesSideBar;
