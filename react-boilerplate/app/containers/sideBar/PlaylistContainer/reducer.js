import { combineReducers } from 'redux';
import addPlaylist from './PlaylistModifiers/AddPlaylist/reducer';
import deletePlaylist from './PlaylistModifiers/DeletePlaylist/reducer';
import renamePlaylist from './PlaylistModifiers/RenamePlaylist/reducer';

export default combineReducers({
  addPlaylist,
  deletePlaylist,
  renamePlaylist,
});
