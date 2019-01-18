import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Rating } from 'semantic-ui-react';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import PlayIcon from 'components/common/Icons/PlayIcon';
const SongRow = props => (
  <tr>
    <th scope="row">
      <Checkbox
        size="mini"
        id={props.song.get('idSongs')}
        checked={props.selected}
        onChange={props.onSongSelect}
      />
      <span className="checkboxSpan" />
    </th>
    <td>
      <PlayIcon
        id={props.song.get('idSongs')}
        onClick={props.onPlayToggle}
        isPlaying={props.isPlaying}
      />
    </td>
    <td>{props.song.get('title')}</td>
    <td>{props.song.get('userName')}</td>
    <td>
      <LoaderWrapper isLoading={props.isLoading}>
        <Rating
          maxRating={5}
          rating={props.song.get('rating')}
          onRate={props.onRate}
        />
      </LoaderWrapper>
    </td>
    <td>{props.song.get('genres')}</td>
    <td>{props.song.get('dateUploaded').substr(0, 10)}</td>
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
