import { createSelector } from 'reselect';
import { makeSelectPathnameRoot } from 'containers/AppUtilities/ProfileContext/selectors';

const selectSongsContainerState = state => state.get('SongsContainer');

export const makeSelectSongsTableState = () =>
  createSelector(
    selectSongsContainerState,
    state => state.get('songsTable')
  );

export const makeSelectUrl = () =>
  createSelector(
    makeSelectPathnameRoot(),
    path => {
      if (path.length < 2) return 'https://thread-204819.appspot.com/stream';
      return `https://thread-204819.appspot.com${path}`;
    }
  );

export const makeSelectCurrentItem = () =>
  createSelector(
    makeSelectSongsTableState(),
    state => {
      console.log(state.get('CurrentItem'));
      return state.get('CurrentItem');
    }
  );

export const makeSelectTotalPages = () =>
  createSelector(
    makeSelectSongsTableState(),
    songsTable => songsTable.get('totalPages')
  );

export const makeSelectSongs = () =>
  createSelector(
    selectSongsContainerState,
    state => state.get('songs')
  );

export const makeSelectIsLoading = () =>
  createSelector(
    selectSongsContainerState,
    state => state.get('isLoading')
  );

export const makeSelectSortBy = () =>
  createSelector(
    makeSelectSongsTableState(),
    songsTable => songsTable.get('sortBy')
  );

export const makeSelectDescending = () =>
  createSelector(
    makeSelectSongsTableState(),
    state => state.get('descending')
  );

export const makeSelectSelectedSongs = () =>
  createSelector(
    makeSelectSongsTableState(),
    songsTable => songsTable.get('selectedSongs')
  );

export const makeSelectNoneSelected = () =>
  createSelector(
    makeSelectSelectedSongs(),
    selectedSongs => selectedSongs.length < 1
  );
