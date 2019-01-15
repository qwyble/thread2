import { createSelector } from 'reselect';

const selectSongsContainerState = state => state.get('SongsContainer');
const selectSongsContainerOwnProps = (state, ownProps) => ownProps;

export const makeSelectSongsTableState = () =>
  createSelector(
    selectSongsContainerState,
    state => state.get('songsTable')
  );

export const makeSelectPathname = () =>
  createSelector(
    selectSongsContainerOwnProps,
    ownProps => ownProps.location.pathname.split('/')[1]
  );

export const makeSelectUrl = () =>
  createSelector(
    makeSelectPathname(),
    path => {
      if (path.length < 2) return 'https://thread-204819.appspot.com/stream';
      return `https://thread-204819.appspot.com${path}`;
    }
  );

export const makeSelectCurrentPage = () =>
  createSelector(
    makeSelectSongsTableState(),
    state => state.get('currentPage')
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
    selectSongsContainerState,
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
