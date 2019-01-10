import React from 'react';
import PropTypes from 'prop-types';

const MessagesSideBar = props => (
  <div>
    <MessagesSideBar
      onDelete={props.delete}
      onGetSent={props.getSent}
      onGetInbox={props.getInbox}
    />
  </div>
);

MessagesSideBar.propTypes = {
  delete: PropTypes.func,
  getSent: PropTypes.func,
  getInbox: PropTypes.func,
};

export default MessagesSideBar;
