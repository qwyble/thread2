import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import SongsTable from 'components/SongsTable/SongsTable';

import { compose } from 'redux';
import { connect } from 'react-redux';

import injectSaga from 'utils/injectSaga';

import { makeSelectParams } from 'containers/AppUtilities/ProfileContext/selectors';
import { getSongs, sortBy, selectAll } from './actions';

import saga from './saga';

import { makeSelectIsLoading, makeSelectAllSelected } from './selectors';

require('./css.css');

class SongsContainer extends React.Component {
  componentDidMount() {
    this.props.getSongs();
  }

  componentDidUpdate(prevProps) {
    if (this.props.param !== prevProps.param) {
      this.props.getSongs();
    }
  }

  render() {
    return (
      <div className="SongSorter">
        <SongsTable
          onSortBy={this.props.sortBy}
          isLoading={this.props.isLoading}
          allSelected={this.props.allSelected}
          onSelectAll={this.props.selectAll}
        />
      </div>
    );
  }
}

SongsContainer.propTypes = {
  selectAll: PropTypes.func.isRequired,
  sortBy: PropTypes.func.isRequired,
  getSongs: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  allSelected: PropTypes.bool.isRequired,
  param: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  allSelected: makeSelectAllSelected(),
  param: makeSelectParams(),
});

const mapDispatchToProps = {
  sortBy,
  getSongs,
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
