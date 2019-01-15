import { createSelector } from 'reselect';
import { makeSelectSelectedSongs } from 'containers/SongsContainer/SongsContainer/selectors';

export const selectSongRemoverState = state => state.get('SongRemover');

export const makeSelectIsLoading = () =>
  createSelector(
    selectSongRemoverState,
    state => state.get('isLoading')
  );

export const makeSelectDidSucceed = () =>
  createSelector(
    selectSongRemoverState,
    state => state.get('didSucceed')
  );

export const makeSelectSelectedSongsLength = () =>
  createSelector(
    makeSelectSelectedSongs(),
    selectedSongs => selectedSongs.length
  );
