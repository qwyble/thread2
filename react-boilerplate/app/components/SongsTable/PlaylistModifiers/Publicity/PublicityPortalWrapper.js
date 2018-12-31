import React from 'react';
import PathWrapper from 'containers/Wrappers/PathWrapper';
import IsOwner from 'containers/Wrappers/IsOwner';
import PublicityPortal from 'containers/SongsContainer/PlaylistModifiers/PublicityPortal';

const PublicityPortalWrapper = () => (
  <div>
    <PathWrapper>
      <IsOwner>
        <PublicityPortal />
      </IsOwner>
    </PathWrapper>
  </div>
);

export default PublicityPortalWrapper;
