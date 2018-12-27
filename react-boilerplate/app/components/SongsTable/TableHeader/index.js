import { Table } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

// TODO: handleSort();
const TableHeader = props => (
  <Table.Header className="stickyTop">
    <Table.Row>
      <Table.HeaderCell />
      <Table.HeaderCell />
      <Table.HeaderCell>
        Title
        <Icon name="sort" onClick={() => this.props.onSortBy('songs.title')} />
      </Table.HeaderCell>
      <Table.HeaderCell>
        Uploader
        <Icon name="sort" onClick={() => this.props.onSortBy('songs.owner')} />
      </Table.HeaderCell>
      <Table.HeaderCell>
        Rating
        <Icon
          name="sort"
          onClick={() => this.props.onSortBy('songratings.rating')}
        />
      </Table.HeaderCell>
      <Table.HeaderCell>
        Genre
        <Icon name="sort" onClick={() => this.props.onSortBy('songs.genres')} />
      </Table.HeaderCell>
      <Table.HeaderCell>
        Date Uploaded
        <Icon
          name="sort"
          onClick={() => this.props.onSortBy('songs.dateUploaded')}
        />
      </Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default TableHeader;
