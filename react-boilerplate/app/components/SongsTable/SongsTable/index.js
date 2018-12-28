import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import PlaylistPortal from 'containers/songRenderers/PlaylistPortal';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import ClonePortalWrapper from 'components/SongsTable/ClonePortalWrapper';
import WrappedSongRows from '../../../components/SongTableUtilities/wrappedSongRows.js';
import RemoveSongFromPlaylist from '../../components/SongTableUtilities/removeSongFromPlaylist.js';
import MakePublic from '../../components/sidebarUtilities/makePublic.js';
import FollowContainer from '../../follower/followContainer.js';
import Paginator from '../../utilities/paginator.js';
import TableHeader from '../TableHeader';
// renders the lst of songs, controls adding and deleting songs to/from playlists
//
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
        <WrappedSongRows />
      </LoaderWrapper>

      <Table.Footer className="stickyBottom">
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <ClonePortalWrapper />

            <PlaylistPortal />

            <FollowContainer />

            <RemoveSongFromPlaylist />
          </Table.HeaderCell>
          <Table.HeaderCell colSpan="1" />
          <MakePublic />
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
