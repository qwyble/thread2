import React from 'react';
import { Table, Loader, Icon } from 'semantic-ui-react';
import PlaylistPortal from 'containers/songRenderers/PlaylistPortal';
import RenderClonePortal from '../../components/sidebarUtilities/renderClonePortal.js';
import WrappedSongRows from '../../../components/SongTableUtilities/wrappedSongRows.js';
import RemoveSongFromPlaylist from '../../components/SongTableUtilities/removeSongFromPlaylist.js';
import MakePublic from '../../components/sidebarUtilities/makePublic.js';
import FollowContainer from '../../follower/followContainer.js';
import Paginator from '../../utilities/paginator.js';

// renders the lst of songs, controls adding and deleting songs to/from playlists
//
class SongsTable extends React.Component {
  render() {
    return (
      <div>
        <Table
          className="t1"
          size="small"
          celled
          striped
          compact
          unstackable
          inverted
          selectable
        >
          <TableHeader onSortBy={this.props.onSortBy} />

          <LoaderWrapper isLoading={this.props.isLoading} size="massive">
            <WrappedSongRows />
          </LoaderWrapper>

          <Table.Footer className="stickyBottom">
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <RenderClonePortal />

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
  }
}

export default SongSorter;
