import React from 'react';
import PropTypes from 'prop-types';
import { Table, Checkbox, Rating } from 'semantic-ui-react';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import PlayIcon from 'components/common/Icons/PlayIcon';
const SongRow = props => (
  <Table.Row className="row">
    <Table.Cell collapsing>
      <Checkbox
        size="mini"
        id={props.song.idSongs}
        checked={props.selected}
        onChange={props.onSongSelect}
      />
      <span className="checkboxSpan" />
    </Table.Cell>
    <Table.Cell collapsing id={props.song.idSongs} onClick={props.onPlayToggle}>
      <PlayIcon isPlaying={props.isPlaying} />
    </Table.Cell>
    <Table.Cell>{props.song.title}</Table.Cell>
    <Table.Cell>{props.song.userName}</Table.Cell>
    <Table.Cell>
      <LoaderWrapper isLoading={props.isLoading}>
        <Rating
          maxRating={5}
          rating={props.song.rating}
          onRate={props.onRate}
        />
      </LoaderWrapper>
    </Table.Cell>
    <Table.Cell>{props.song.genres}</Table.Cell>
    <Table.Cell>{props.song.dateUploaded.substr(0, 10)}</Table.Cell>
  </Table.Row>
);

SongRow.propTypes = {
  onRate: PropTypes.func,
  song: PropTypes.object,
  selected: PropTypes.bool,
  isLoading: PropTypes.bool,
  isPlaying: PropTypes.bool,
  onPlayToggle: PropTypes.func,
  onSongSelect: PropTypes.func,
};
export default SongRow;
