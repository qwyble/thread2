import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'semantic-ui-react';

const MessagesTableHeader = props => (
  <div>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>
          {props.isInbox ? <span>Sender</span> : <span>Recipient</span>}
        </Table.HeaderCell>
        <Table.HeaderCell>Subject</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  </div>
);

MessagesTableHeader.propTypes = {
  isInbox: PropTypes.bool,
};

export default MessagesTableHeader;
