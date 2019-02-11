import React from 'react';
import PropTypes from 'prop-types';
import { Search, Image, Icon } from 'semantic-ui-react';
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
require('./css.css');

class SearchBar extends React.Component {
  handleSearchChange = e => {
    debounce(this.props.searchChange, 150)(e.target.value);
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
          icon: 'list',
        })),
      },
      songs: {
        name: 'songs',
        results: this.props.songs.map(song => ({
          title: song.title,
          description: song.userName,
          key: song.idSongs,
          url: `/song/${song.idSongs}`,
          icon: 'music',
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
        onSearchChange={this.handleSearchChange}
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

const resultRenderer = ({ title, url, image, icon }) => (
  <div>
    <Link to={url}>
      <div className="row">
        <div className="col-sm-2">
          {icon ? (
            <Icon className="search-bar-icon" floated="left" name={icon} />
          ) : (
            <Image
              className="searchImage"
              floated="left"
              circular
              size="mini"
              src={image}
            />
          )}
        </div>
        <div className="col-sm-10">
          <span>{title}</span>
        </div>
      </div>
    </Link>
  </div>
);

resultRenderer.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};
