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

    <tfoot>
      <tr>
        <th>
          <Link to="/forum/post">
            <Button>Post Thread</Button>
          </Link>
          <Menu floated="right" pagination>
            <Menu.Item as="a" icon>
              <Icon name="chevron left" />
            </Menu.Item>
            <Menu.Item as="a" icon>
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </th>
      </tr>
    </tfoot>
  </table>
);

ThreadTable.propTypes = {
  threads: PropTypes.object,
};

export default ThreadTable;
