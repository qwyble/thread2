import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import PlayIcon from 'components/common/Icons/PlayIcon';

require('./css.css');

class SongRow extends React.Component {
  handlePlayToggle = () => {
    if (this.props.isPlaying) this.props.onPause();
    else this.props.onPlay(this.props.song);
  };

  render() {
    return (
      <tr
        className={this.props.isPlaying ? 'd-flex playing-song-row' : 'd-flex'}
      >
        <th scope="row" className="checkbox-cell col-1">
          <span className="checkbox-span">
            <input
              type="checkbox"
              name="hiddencb"
              className="checkbox"
              id={this.props.song.get('idSongs')}
              checked={this.props.selected}
              onChange={this.props.onSongSelect}
            />
          </span>
          <span className="play-icon-span">
            <PlayIcon
              id={this.props.song.get('idSongs')}
              onClick={this.handlePlayToggle}
              isPlaying={this.props.isPlaying}
            />
          </span>
        </th>
        <td className="col-3 title-cell">
          <p>{this.props.song.get('title')}</p>
        </td>
        <td className="col-2">{this.props.song.get('userName')}</td>
        <td className="col-2">
          <LoaderWrapper isLoading={this.props.isLoading}>
            <Rating
              maxRating={5}
              rating={this.props.song.get('rating')}
              onRate={this.props.onRate}
            />
          </LoaderWrapper>
        </td>
        <td className="col-2">{this.props.song.get('genres')}</td>
        <td className="col-2">
          {this.props.song.get('dateUploaded').substr(0, 10)}
        </td>
      </tr>
    );
  }
}

SongRow.propTypes = {
  onRate: PropTypes.func,
  song: PropTypes.object,
  selected: PropTypes.bool,
  isLoading: PropTypes.bool,
  isPlaying: PropTypes.bool,
  onSongSelect: PropTypes.func,
  onPause: PropTypes.func,
  onPlay: PropTypes.func,
};
export default SongRow;
