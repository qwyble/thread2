import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import SongsTable from 'containers/SongsContainer/SongsTable';

class PlaylistController extends React.Component {
  componentDidMount() {
    this.props.getSongs();
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.props.getSongs();
    }
  }

  render() {
    return (
      <div className="SongSorter">
        <SongSorter />
      </div>
    );
  }
}

export default PlaylistController;
