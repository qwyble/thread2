import React from 'react';
import PropTypes from 'prop-types';

import { Table, Button, Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import ThreadList from 'components/Forum/ThreadsTable/ThreadList';

require('./css.css');

const ThreadTable = ({ threads }) => (
  <table className="threads-table">
    <thead>
      <tr>
        <th>Subject</th>
        <th>Poster</th>
        <th>Category</th>
        <th>Replies</th>
        <th>Subs</th>
        <th>Date</th>
      </tr>
    </thead>

    <ThreadList threads={threads} />
  </table>
);

ThreadTable.propTypes = {
  threads: PropTypes.object,
};

export default ThreadTable;
