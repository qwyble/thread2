import { createSelector } from 'reselect';
import { makeSelectParams } from 'containers/AppUtilities/ProfileContext/selectors';

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
    makeSelectParams,
    params => params.song
  );
