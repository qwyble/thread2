import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import SongsTable from 'containers/SongsContainer/SongsTable';

class PlaylistController extends React.Component {
  componentDidMount() {
    this.getSongs();
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.getSongs();
    }
  }

  getSongs = (sortBy, descending) => {
    this.setState({ _loading: true });

    const url = this.getUrl();
    const _currentItem = this.state.currentItem;
    const _sortBy = sortBy || 'dateUploaded';
    const _descending = descending ? 'ASC' : 'DESC';

    songsGet(url, _sortBy, _descending, _currentItem).then(result => {
      this.setState({
        songs: result.data[0],
        _loading: false,
        totalPages: result.data[1][0]
          ? Math.ceil(result.data[1][0].count / 20)
          : 1,
      });
      this.props.onSetSongs(result.data[0]);
    });
  };

  handleRemoval = songs => {
    this.setState({ songs });
  };

  handleSortBy = (sortBy, descending) => {
    this.getSongs(sortBy, descending);
  };

  handleSetCurrentItem = currentItem => {
    this.setState({ currentItem }, () => this.getSongs());
  };

  render() {
    return (
      <div className="SongSorter">
        <SongSorter />
      </div>
    );
  }
}

export default PlaylistController;

const songsGet = (url, sortBy, descending, currentItem) =>
  axios.get(url, {
    params: {
      sortBy,
      descending,
      currentItem,
    },
    withCredentials: true,
  });
