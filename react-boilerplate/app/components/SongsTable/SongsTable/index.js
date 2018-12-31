import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import AddToPlaylistPortal from 'containers/SongsContainer/AddToPlaylistPortal';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import ClonePortalWrapper from 'components/SongsTable/ClonePortalWrapper';
import RemoveSongFromPlaylist from 'containers/SongsContainer/PlaylistModifiers/RemoveFromPlaylist';
import SongRowsContainer from 'containers/SongsContainer/SongRowsContainer';
import MakePublic from 'containers/SongsContainer/PlaylistModifiers/PublicityPortal';
import FollowContainer from '../../follower/followContainer.js';
import Paginator from '../../utilities/paginator.js';
import TableHeader from '../TableHeader';
import IsOwner from 'containers/Wrappers/IsOwner';


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

            <IsOwner>
              <RemoveSongFromPlaylist />
            </IsOwner>

          </Table.HeaderCell>
          <Table.HeaderCell colSpan="1" >

            <IsOwner>
              <MakePublic />
            </IsOwner>

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
