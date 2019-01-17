import { toJS } from 'immutable';
import { createSelector } from 'reselect';
import { makeSelectParams } from 'containers/AppUtilities/ProfileContext/selectors';
import { makeSelectNowPlayingId } from 'containers/Audio/PlaybackContainer/selectors';

export const selectSongDetailsState = state =>
  state.get('SongDetailsContainer');

export const makeSelectIsLoading = () =>
  createSelector(
    selectSongDetailsState,
    state => state.get('isLoading')
  );

export const makeSelectDidSucceed = () =>
  createSelector(
    selectSongDetailsState,
    state => state.get('didSucceed')
  );

export const makeSelectSongIdParam = () =>
  createSelector(
    makeSelectParams(),
    params => params.get('song')
  );

export const makeSelectSong = () =>
  createSelector(
    selectSongDetailsState,
    state => state.get('song')
  );

export const makeSelectIsPlaying = () =>
  createSelector(
    makeSelectSongIdParam(),
    makeSelectNowPlayingId(),
    (songId, nowPlayingId) => {
      if (nowPlayingId) if (songId === nowPlayingId) return true;
      return false;
    }
  );
