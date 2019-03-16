/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import UserContainer from 'containers/AppUtilities/UserContainer/reducers';
import SongsContainer from 'containers/SongsContainer/SongsContainer/reducer';
import ProfileContext from 'containers/AppUtilities/ProfileContext/reducer';
import PlaybackContainer from 'containers/Audio/PlaybackContainer/reducer';
import PlaylistContainer from 'containers/SideBar/PlaylistContainer/reducer';
import CategoryContainer from 'containers/SideBar/CategoryContainer/reducer';

import history from 'utils/history';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    UserContainer,
    ProfileContext,
    SongsContainer,
    PlaybackContainer,
    PlaylistContainer,
    CategoryContainer,
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
