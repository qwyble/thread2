import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Rating } from 'semantic-ui-react';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import PlayIcon from 'components/common/Icons/PlayIcon';
const SongRow = props => (
  <tr className="row">
    <td collapsing>
      <Checkbox
        size="mini"
        id={props.song.idSongs}
        checked={props.selected}
        onChange={props.onSongSelect}
      />
      <span className="checkboxSpan" />
    </td>
    <td>
      <PlayIcon
        id={props.song.idSongs}
        onClick={props.onPlayToggle}
        isPlaying={props.isPlaying}
      />
    </td>
    <td>{props.song.title}</td>
    <td>{props.song.userName}</td>
    <td>
      <LoaderWrapper isLoading={props.isLoading}>
        <Rating
          maxRating={5}
          rating={props.song.rating}
          onRate={props.onRate}
        />
      </LoaderWrapper>
    </td>
    <td>{props.song.genres}</td>
    <td>{props.song.dateUploaded.substr(0, 10)}</td>
  </tr>
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
