import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Segment } from 'semantic-ui-react';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

const ModalDescription = props => (
  <div>
    <Modal.Description>
      <h4>Select an audio file</h4>
      <p>Only wav and mp3 files are accepted</p>
    </Modal.Description>
    <LoaderWrapper isLoading={props.isLoading} size="massive">
      <div>
        <Segment style={{ color: 'black' }}>
          Your song is being uploaded. You may continue to browse during the
          process.
        </Segment>
      </div>
    </LoaderWrapper>
  </div>
);

ModalDescription.propTypes = {
  isLoading: PropTypes.bool,
};

export default ModalDescription;
