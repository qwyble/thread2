import React from 'react';

import ClonePortalContainer from 'containers/SongsContainer/ClonePortalContainer';
import PathWrapper from 'containers/Wrappers/PathWrapper';
import PortalWrapper from 'components/common/PortalWrapper';

const ClonePortalWrapper = () => (
  <PathWrapper>
    <PortalWrapper trigger={trigger} x="50" y="50">
      <ClonePortalContainer />
    </PortalWrapper>
  </PathWrapper>
);

export default ClonePortalWrapper;

const trigger = (
  <button className="ui button" type="button">
    Clone Playlist
  </button>
);
