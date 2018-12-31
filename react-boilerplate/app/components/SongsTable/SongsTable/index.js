import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import AddToPlaylistPortal from 'containers/SongsContainer/PlaylistModifiers/AddToPlaylist/AddToPlaylistPortalWrapper';
import RemoveSongFromPlaylistWrapper from 'components/SongsTable/PlaylistModifiers/RemoveSongFromPlaylistWrapper';
import PublicityPortalWrapper from 'components/SongsTable/PlaylistModifiers/Publicity/PublicityPortalWrapper';
import ClonePortalWrapper from 'components/SongsTable/ClonePortal/ClonePortalWrapper';
import SongRowsContainer from 'containers/SongsContainer/SongRowsContainer';
import FollowContainer from 'containers/FollowContainer/FollowContainer';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import TableHeader from 'components/SongsTable/TableHeader';
import Paginator from '../../utilities/paginator.js';

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
      <LoaderWrapper isLoading={props.isLoading}>
        <SongRowsContainer />
      </LoaderWrapper>
      <Table.Footer className="stickyBottom">
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <ClonePortalWrapper />
            <AddToPlaylistPortal />
            <FollowContainer />
            <RemoveSongFromPlaylistWrapper />
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
