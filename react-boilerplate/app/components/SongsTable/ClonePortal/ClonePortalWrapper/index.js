import React from 'react';

import ClonePortalContainer from 'containers/SongsContainer/ClonePortalContainer';
import PathWrapper from 'containers/Wrappers/PathWrapper';
import PortalWrapper from 'components/common/PortalWrapper';

const ClonePortalWrapper = () => {
  const trigger = (
    <button className="ui button" type="button">
      Clone Playlist{' '}
    </button>
  );
  return (
    <PathWrapper>
      <PortalWrapper trigger={trigger}>
        <ClonePortalContainer />
      </PortalWrapper>
    </PathWrapper>
  );
};

export default ClonePortalWrapper;
