import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import SongsTable from 'components/SongsTable/SongsTable';

import { compose } from 'redux';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getSongs, sortBy, setDescending } from './actions';
import reducer from './reducer';
import { makeSelectIsLoading } from './selectors';

class SongsContainer extends React.Component {
  componentDidMount() {
    this.props.getSongs();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.getSongs();
    }
  }

  render() {
    return (
      <div className="SongSorter">
        <SongsTable
          onSortBy={this.props.sortBy}
          isLoading={this.props.isLoading}
          onSetDescending={this.props.setDescending}
        />
      </div>
    );
  }
}

SongsContainer.propTypes = {
  sortBy: PropTypes.func,
  getSongs: PropTypes.func,
  isLoading: PropTypes.bool,
  location: PropTypes.object,
  setDescending: PropTypes.func,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: () => makeSelectIsLoading(),
  });

const mapDispatchToProps = {
  sortBy,
  getSongs,
  setDescending,
};

const withReducer = injectReducer({ key: 'songsContainer', reducer });
const withSaga = injectSaga({ key: 'songsContainerSaga', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withRouter,
  withSaga,
  withReducer,
  withConnect
)(SongsContainer);
