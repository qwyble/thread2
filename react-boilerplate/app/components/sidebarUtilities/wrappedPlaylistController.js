import React from 'react';
import {AppContext} from '../../appUtilities/context.js';
import PlaylistController from '../../containers/songRenderers/playlistController.js';


const WrappedPlaylistController = (props) => (
  <div>
    <AppContext.Consumer>{context => (
      <PlaylistController
        {...props}
        onSetSongs={context.onSetSongs}
        url={window.location.pathname}
      />)}
    </AppContext.Consumer>
  </div>
)

export default WrappedPlaylistController;
