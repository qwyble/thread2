import React from 'react';
import PropTypes from 'prop-types';
import { Table, Loader } from 'semantic-ui-react';

import TableHeader from 'components/SongsTable/TableHeader';
import SongRowsContainer from 'containers/SongsContainer/SongRowsContainer';
import ClonePortalWrapper from 'components/SongsTable/ClonePortal/ClonePortalWrapper';
import SongAdderPortalWrapper from 'components/SongsTable/PlaylistModifiers/SongAdder/SongAdderPortalWrapper';
import FollowContainer from 'containers/FollowContainer/FollowContainer';
import SongRemoverPortalWrapper from 'components/SongsTable/PlaylistModifiers/SongRemover/SongRemoverPortalWrapper';
import PublicityPortalWrapper from 'components/SongsTable/PlaylistModifiers/Publicity/PublicityPortalWrapper';
import Paginator from 'containers/SongsContainer/Paginator';

const SongsTable = props => (
  <div>
    <Table
      celled
      compact
      striped
      inverted
      selectable
      unstackable
      size="small"
      className="t1"
    >
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
      <Table.Footer className="stickyBottom">
        <Table.Row>
          <Table.HeaderCell colSpan="5">
            <ClonePortalWrapper />
            <SongAdderPortalWrapper />
            <FollowContainer />
            <SongRemoverPortalWrapper />
          </Table.HeaderCell>
          <Table.HeaderCell colSpan="1">
            <PublicityPortalWrapper />
          </Table.HeaderCell>
          <Table.Cell collapsing>
            <Paginator />
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  </div>
);

SongsTable.propTypes = {
  onSortBy: PropTypes.func,
  isLoading: PropTypes.bool,
  onSetDescending: PropTypes.func,
};

export default SongsTable;
