import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import SongsTable from 'containers/SongsContainer/SongsTable';

import { compose } from 'redux';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { getSongs } from './actions';
import reducer from './reducer';

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
        <SongsTable />
      </div>
    );
  }
}

SongsContainer.propTypes = {
  getSongs: PropTypes.func,
  location: PropTypes.object,
};

const mapStateToProps = () => createStructuredSelector({});
const mapDispatchToProps = {
  getSongs,
};

const withReducer = injectReducer({ key: 'songsContainerReducer', reducer });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withRouter,
  withReducer,
  withConnect
)(SongsContainer);
