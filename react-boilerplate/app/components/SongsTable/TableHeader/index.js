import { Table, Icon } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

require('./css.css');

const TableHeader = props => (
  <thead
    className="songs-table-header"
    style={{ display: 'block', width: '99%' }}
  >
    <tr className="d-flex">
      <th scope="col" className="" style={{ width: '4%' }} />
      <th scope="col" className="" style={{ width: '4%' }} />
      <th scope="col" className="col-3">
        Title
        <Icon name="sort" onClick={() => props.onSortBy('songs.title')} />
      </th>
      <th scope="col" className="col-3">
        Uploader
        <Icon name="sort" onClick={() => props.onSortBy('songs.owner')} />
      </th>
      <th scope="col" className="col-1">
        Rating
        <Icon
          name="sort"
          onClick={() => props.onSortBy('songratings.rating')}
        />
      </th>
      <th scope="col" className="col-2">
        Genre
        <Icon name="sort" onClick={() => props.onSortBy('songs.genres')} />
      </th>
      <th scope="col" className="col-2">
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
