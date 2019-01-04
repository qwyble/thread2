import { fromJS } from 'immutable';
import { UPLOAD_SONG, UPLOAD_SONG_COMPLETE, UPLOAD_SONG_FAILED} from './constants';

const initialState = fromJS({
  isLoading: false,
  didSucceed: false,
});

export default function UploaderReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_SONG:
      return state.set('isLoading', true);
    case UPLOAD_SONG_COMPLETE:
      return state.set('isLoading', false).set('didSucceed', true);
    case UPLOAD_SONG_FAILED:
      return state.set('isLoading': false);
    default:
      return state;
  }
}
