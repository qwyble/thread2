import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ThreadList = props => (
  <Table.Body>
    {props.threads.map((t, i) => (
      <Table.Row key={i}>
        <Table.Cell>
          <Link to={{ pathname: `/forum/thread/${t.get('id')}` }}>
            {t.get('subject')}
          </Link>
        </Table.Cell>
        <Table.Cell>{t.get('userName')}</Table.Cell>
        <Table.Cell>{t.get('category')}</Table.Cell>
        <Table.Cell>{t.get('replies')}</Table.Cell>
        <Table.Cell>{t.get('subs')}</Table.Cell>
        <Table.Cell>
          {t.get('date') ? t.get('date').slice(0, 10) : ''}
        </Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
);

ThreadList.propTypes = {
  threads: PropTypes.array,
};

export default ThreadList;
