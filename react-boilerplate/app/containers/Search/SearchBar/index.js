import React from 'react';
import PropTypes from 'prop-types';
import { Search, Image } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import debounce from 'utils/debounce';

import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';

import {
  makeSelectUsers,
  makeSelectSongs,
  makeSelectPlaylists,
} from './selectors';

import { searchChange } from './actions';

class SearchBar extends React.Component {
  handleSearchChange = e => {
    debounce(this.props.searchChange, 250, true);
    axios({
      method: 'get',
      url: `https://thread-204819.appspot.com/searchBar/${escape(
        this.state.searchString || '%'
      )}`,
    });
  };

  render() {
    const results = {
      users: {
        name: 'users',
        results: this.props.users.map(user => ({
          title: user.userName,
          key: user.idUsers,
          url: `/profile/${user.idUsers}`,
          image: user.imageUrl,
        })),
      },
      playlists: {
        name: 'playlists',
        results: this.props.playlists.map(playlist => ({
          title: playlist.name || '',
          key: playlist.idplaylists,
          url: `/playlist/${playlist.idplaylists}`,
        })),
      },
      songs: {
        name: 'songs',
        results: this.props.songs.map(song => ({
          title: song.title,
          description: song.userName,
          key: song.idSongs,
          url: `/song/${song.idSongs}`,
        })),
      },
    };

    return (
      <Search
        fluid
        category
        className="searchBar"
        results={results}
        loading={this.props.isLoading}
        resultRenderer={resultRenderer}
        value={this.props.searchString}
        onSearchChange={this.props.searchChange}
      />
    );
  }
}

SearchBar.propTypes = {
  searchString: PropTypes.string,
};

const resultRenderer = ({ title, url, image }) => (
  <div>
    <Link to={url}>
      <Image
        className="searchImage"
        floated="left"
        circular
        size="mini"
        src={image}
      />
      {title}
    </Link>
  </div>
);

export default SearchBar;
