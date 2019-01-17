import { Table, Icon } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = props => (
  <thead>
    <tr>
      <th scope="col" />
      <th scope="col" />
      <th scope="col">
        Title
        <Icon name="sort" onClick={() => props.onSortBy('songs.title')} />
      </th>
      <th scope="col">
        Uploader
        <Icon name="sort" onClick={() => props.onSortBy('songs.owner')} />
      </th>
      <th scope="col">
        Rating
        <Icon
          name="sort"
          onClick={() => props.onSortBy('songratings.rating')}
        />
      </th>
      <th scope="col">
        Genre
        <Icon name="sort" onClick={() => props.onSortBy('songs.genres')} />
      </th>
      <th scope="col">
        Date Uploaded
        <Icon
          name="sort"
          onClick={() => props.onSortBy('songs.dateUploaded')}
        />
      </th>
    </tr>
  </thead>
);

TableHeader.propTypes = {
  onSortBy: PropTypes.func,
};

export default TableHeader;
