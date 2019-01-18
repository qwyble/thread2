import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import PortalWrapper from 'components/common/PortalWrapper';
import IsPlaylistPathWrapper from 'containers/Wrappers/IsPlaylistPathWrapper';
import SongRemover from 'containers/SongsContainer/PlaylistModifiers/SongRemover';
import IsPlaylistOwner from 'containers/Wrappers/IsPlaylistOwner';

const SongRemoverPortalWrapper = props => {
  const trigger = <Button size="mini">Remove from Playlist</Button>;
  return (
    <IsPlaylistOwner>
      <IsPlaylistPathWrapper>
        <PortalWrapper trigger={trigger}>
          <SongRemover onClosePortal={props.closePortal} />
        </PortalWrapper>
      </IsPlaylistPathWrapper>
    </IsPlaylistOwner>
  );
};

SongRemoverPortalWrapper.propTypes = {
  closePortal: PropTypes.func,
};

export default SongRemoverPortalWrapper;
