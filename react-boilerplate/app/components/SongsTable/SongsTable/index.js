import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/common/Loader';
import TableHeader from 'components/SongsTable/TableHeader';
import SongRowsContainer from 'containers/SongsContainer/SongRowsContainer';
import ClonePortalWrapper from 'components/SongsTable/ClonePortal/ClonePortalWrapper';
import SongAdderPortalWrapper from 'components/SongsTable/PlaylistModifiers/SongAdder/SongAdderPortalWrapper';
import FollowContainer from 'containers/FollowContainer/FollowContainer';
import SongRemoverPortalWrapper from 'components/SongsTable/PlaylistModifiers/SongRemover/SongRemoverPortalWrapper';
import PublicityPortalWrapper from 'components/SongsTable/PlaylistModifiers/Publicity/PublicityPortalWrapper';
import Paginator from 'containers/SongsContainer/Paginator';

require('./css.css');

const SongsTable = props => (
  <div className="tables-div">
    <table className="table table-hover table-dark  songs-table">
      <TableHeader
        onSortBy={props.onSortBy}
        onSetDescending={props.onSetDescending}
      />
      {props.isLoading ? (
        <tbody>
          <tr>
            <td>
              <Loader active />{' '}
            </td>
          </tr>
        </tbody>
      ) : (
        <SongRowsContainer />
      )}
    </table>
    <table className="table table-dark playlist-footer">
      <tbody>
        <tr>
          <td className="footer-cell">
            <ClonePortalWrapper />
            <SongAdderPortalWrapper />
            <FollowContainer />
            <SongRemoverPortalWrapper />
            <PublicityPortalWrapper />
            <Paginator />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

SongsTable.propTypes = {
  onSortBy: PropTypes.func,
  isLoading: PropTypes.bool,
  onSetDescending: PropTypes.func,
};

export default SongsTable;
