import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Header, Input } from 'semantic-ui-react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import debounce from 'utils/debounce';

import Users from 'components/Search/Users';
import Songs from 'components/Search/Songs';
import Playlists from 'components/Search/Playlists';

import { searchChange } from './actions';

import reducer from './reducer';
import saga from './saga';

import {
  makeSelectIsLoading,
  makeSelectUsers,
  makeSelectPlaylists,
  makeSelectSongs,
} from './selectors';

require('./css.css');

class Explorer extends React.Component {
  componentDidMount() {
    this.props.searchChange();
  }

  handleInputChange = e => {
    debounce(this.props.searchChange, 250, true)(e.target.value);
  };

  render() {
    return (
      <div className="container">
        <Input
          className="search-input"
          style={{ width: '100%' }}
          onChange={this.handleInputChange}
          icon="search"
          placeholder="Search..."
          loading={this.props.isLoading}
        />
        <Header>Users</Header>
        <Users users={this.props.users} />
        <Header>Playlists</Header>
        <Playlists playlists={this.props.playlists} />
        <Header>Songs</Header>
        <Songs songs={this.props.songs} />
      </div>
    );
  }
}

Explorer.propTypes = {
  isLoading: PropTypes.bool,
  users: PropTypes.object.isRequired,
  songs: PropTypes.object.isRequired,
  playlists: PropTypes.object.isRequired,
  searchChange: PropTypes.func.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    users: makeSelectUsers(),
    songs: makeSelectSongs(),
    playlists: makeSelectPlaylists(),
  });

const mapDispatchToProps = {
  searchChange,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'Explorer', reducer });
const withSaga = injectSaga({ key: 'Explorer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Explorer);
