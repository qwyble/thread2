import React from 'react';
import PathWrapper from 'containers/Wrappers/PathWrapper';
import IsPlaylistOwner from 'containers/Wrappers/IsPlaylistOwner';
import PublicityPortal from 'containers/SongsContainer/PlaylistModifiers/PublicityPortal';

const PublicityPortalWrapper = () => (
  <PathWrapper>
    <IsPlaylistOwner>
      <PublicityPortal />
    </IsPlaylistOwner>
  </PathWrapper>
);

export default PublicityPortalWrapper;
