import { Table, Icon } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <button
          type="button"
          className="ui button table-header"
          onClick={() => props.onSortBy('songs.title')}
        >
          Title
          <FontAwesomeIcon icon="sort" />
        </button>
      </th>
      <th scope="col" className="col-2">
        <button
          type="button"
          className="ui button table-header"
          onClick={() => props.onSortBy('songs.owner')}
        >
          Uploader
          <FontAwesomeIcon icon="sort" />
        </button>
      </th>
      <th scope="col" className="col-2">
        <button
          type="button"
          className="ui button table-header"
          onClick={() => props.onSortBy('songratings.rating')}
        >
          Rating
          <FontAwesomeIcon icon="sort" />
        </button>
      </th>
      <th scope="col" className="col-2">
        <button
          type="button"
          className="ui button table-header"
          onClick={() => props.onSortBy('songs.genres')}
        >
          Genre
          <FontAwesomeIcon icon="sort" />
        </button>
      </th>
      <th scope="col" className="col-2">
        <button
          type="button"
          className="ui button table-header"
          onClick={() => props.onSortBy('songs.dateUploaded')}
        >
          Date Uploaded
          <FontAwesomeIcon icon="sort" />
        </button>
      </th>
    </tr>
  </thead>
);

TableHeader.propTypes = {
  onSortBy: PropTypes.func,
};

export default TableHeader;
