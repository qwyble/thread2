import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import ModalWrapper from 'components/common/ModalWrapper';
import Uploader from 'containers/Uploader';

const UploadButton = props => {
  const trigger = (
    <div>
      <Icon name="angle double up" />
      Upload
    </div>
  );
  return (
    <div>
      <ModalWrapper trigger={trigger}>
        <Uploader onCloseModal={props.onCloseModal} />
      </ModalWrapper>
    </div>
  );
};

UploadButton.propTypes = {
  onCloseModal: PropTypes.func,
};

export default UploadButton;
