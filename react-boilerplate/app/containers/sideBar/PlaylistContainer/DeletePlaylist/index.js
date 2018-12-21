import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, Segment } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';

import { deletePlaylist } from './actions';


import { makeSelectIsLoading, makeSelectDidDelete, makeSelectError } from './selectors';
import LoaderWrapper from '../LoaderWrapper';


class DeletePlaylist extends Component {

  componentDidUpdate() {
    if(this.props.didDelete) this.props.onClosePortal();
  }

  handleDelete() {
    this.props.deletePlaylist(this.props.id);
  }

  handleCancel() {
    this.props.onClosePortal();
  }

  render() {
    return (
      <div>
        <Segment
          style={{
            top: '10%',
            left: '15%',
            width: '14%',
            zIndex: 1000,
            position: 'fixed',
          }}
        >
          <LoaderWrapper isLoading={this.props.isLoading}>
            <p>
              Are you sure you want to delete the
              {this.props.playlist}
              playlist?
            </p>
            <Button onClick={this.handleDelete}>yes</Button>
            <Button onClick={this.handleCancel}>no</Button>
          </LoaderWrapper>
        </Segment>
      </div>
    )
  }
}

DeletePlaylist.propTypes = {
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  didDelete: PropTypes.bool,
  playlist: PropTypes.string,
  onClosePortal: PropTypes.func,
  deletePlaylist: PropTypes.func,
}

const mapStateToProps = () => createStructuredSelector({
  isLoading: () => makeSelectIsLoading(),
  didDelete: () => makeSelectDidDelete(),
  error: () => makeSelectError(),
});

const mapDispatchToProps = {
  deletePlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: DeletePlaylist, saga });

export default compose(
  withSaga,
  withConnect,
)(DeletePlaylist);
