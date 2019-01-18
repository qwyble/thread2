import React from 'react';
import { toJS } from 'immutable';
import PropTypes from 'prop-types';
import { Search, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import debounce from 'utils/debounce';

import { createStructuredSelector } from 'reselect';
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
  makeSelectIsLoading,
} from './selectors';

import { searchChange } from './actions';

class SearchBar extends React.Component {
  handleSearchChange = e => {
    debounce(this.props.searchChange, 250, true)(e.target.value);
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
  searchChange: PropTypes.func,
  users: PropTypes.array,
  songs: PropTypes.array,
  playlists: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = () =>
  createStructuredSelector({
    users: makeSelectUsers(),
    songs: makeSelectSongs(),
    playlists: makeSelectPlaylists(),
    isLoading: makeSelectIsLoading(),
  });

const mapDispatchToProps = {
  searchChange,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'SearchBar', reducer });
const withSaga = injectSaga({ key: 'SearchBar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SearchBar);

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

resultRenderer.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};
