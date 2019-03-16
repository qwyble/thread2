import React from 'react';
import IsPlaylistPathWrapper from 'containers/Wrappers/IsPlaylistPathWrapper';
import IsSideBarOwner from 'containers/Wrappers/IsSideBarOwner';
import PublicityPortal from 'containers/SongsContainer/PlaylistModifiers/PublicityPortal';

const PublicityPortalWrapper = () => (
  <IsPlaylistPathWrapper>
    <IsSideBarOwner>
      <PublicityPortal />
    </IsSideBarOwner>
  </IsPlaylistPathWrapper>
);

export default PublicityPortalWrapper;
