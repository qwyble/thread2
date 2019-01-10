import React from 'react';
import { Icon } from 'semantic-ui-react';

import ModalWrapper from 'components/common/ModalWrapper';
import Uploader from 'containers/Uploader';

const UploadButton = () => {
  const trigger = (
    <div>
      <Icon name="angle double up" />
      Upload
    </div>
  );
  return (
    <div>
      <ModalWrapper trigger={trigger}>
        <Uploader />
      </ModalWrapper>
    </div>
  );
};

export default UploadButton;
