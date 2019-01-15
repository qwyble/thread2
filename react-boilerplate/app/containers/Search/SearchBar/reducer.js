import {
  SEARCH_CHANGE,
  SEARCH_CHANGE_COMPLETED,
  SEARCH_CHANGE_FAILED,
} from './constants';

const initialState = {
  isLoading: false,
  users: [],
  playlists: [],
  songs: [],
};

export default function SearchBarReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CHANGE:
      return { ...state, isLoading: true };
    case SEARCH_CHANGE_COMPLETED:
      return {
        isLoading: false,
        users: action.obj.users,
        playlists: action.obj.playlists,
        songs: action.obj.songs,
      };
    case SEARCH_CHANGE_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
