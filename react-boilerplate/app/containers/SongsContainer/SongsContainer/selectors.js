import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectSongsContainerState = state => state.get('songsContainer');
const selectSongsContainerOwnProps = (state, ownProps) => ownProps;

export const selectSongsTableState = () =>
  createSelector(
    selectSongsContainerState,
    state => state.get('songsTable')
  );

export const makeSelectPathname = () =>
  createSelector(
    selectSongsContainerOwnProps,
    ownProps => ownProps.location.pathname
  );

export const makeSelectUrl = () =>
  createSelector(
    makeSelectPathname,
    path => {
      if (path.length < 2) return 'https://thread-204819.appspot.com/stream';
      return `https://thread-204819.appspot.com${path}`;
    }
  );

export const makeSelectCurrentPage = () =>
  createSelector(
    selectSongsTableState,
    state => state.get('currentPage')
  );

export const makeSelectTotalPages = () =>
  createSelector(
    selectSongsTableState,
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
    selectSongsTableState,
    songsTable => songsTable.get('sortBy')
  );

export const makeSelectDescending = () =>
  createSelector(
    selectSongsContainerState,
    state => state.get('descending')
  );

export const makeSelectSelectedSongs = () =>
  createSelector(
    selectSongsTableState,
    songsTable => songsTable.get('selectedSongs')
  );

export const makeSelectNoneSelected = () =>
  createSelector(
    makeSelectSelectedSongs,
    selectedSongs => selectedSongs.length < 1
  );
