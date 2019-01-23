import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import SongsTable from 'components/SongsTable/SongsTable';

import { compose } from 'redux';
import { connect } from 'react-redux';

import injectSaga from 'utils/injectSaga';

import { getSongs, sortBy, setDescending, selectAll } from './actions';

import saga from './saga';

import { makeSelectIsLoading, makeSelectAllSelected } from './selectors';

require('./css.css');

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
          allSelected={this.props.allSelected}
          onSelectAll={this.props.selectAll}
        />
      </div>
    );
  }
}

SongsContainer.propTypes = {
  selectAll: PropTypes.func,
  sortBy: PropTypes.func,
  getSongs: PropTypes.func,
  isLoading: PropTypes.bool,
  location: PropTypes.object,
  setDescending: PropTypes.func,
  allSelected: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  allSelected: makeSelectAllSelected(),
});

const mapDispatchToProps = {
  sortBy,
  getSongs,
  setDescending,
  selectAll,
};

const withSaga = injectSaga({ key: 'songsContainer', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withRouter,
  withSaga,
  withConnect
)(SongsContainer);
