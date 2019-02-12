import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import ModalDescription from 'components/Uploader/ModalDescription';
import UploaderForm from 'components/Uploader/UploaderForm';

import reducer from './reducer';
import saga from './saga';

import { makeSelectIsLoading, makeSelectDidSucceed } from './selectors';
import { uploadSong } from './actions';

class Uploader extends React.Component {
  componentDidUpdate() {
    if (this.props.didSucceed) this.props.onCloseModal();
  }

  render() {
    return (
      <div>
        <Modal.Header>Song Uploader</Modal.Header>
        <ModalDescription isLoading={this.props.isLoading} />
        <Modal.Content>
          <div>
            <UploaderForm onUploadSong={this.props.uploadSong} />
          </div>
        </Modal.Content>
      </div>
    );
  }
}

Uploader.propTypes = {
  uploadSong: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  didSucceed: PropTypes.bool,
  onCloseModal: PropTypes.func.isRequired,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    didSucceed: makeSelectDidSucceed(),
  });

const mapDispatchToProps = {
  uploadSong,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'UploadModal', reducer });
const withSaga = injectSaga({ key: 'UploadModal', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Uploader);
