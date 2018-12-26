import { createSelector } from 'reselect';

const selectSongsContainerState = state => state;

const makeSelectPathname = () =>
  createSelector(
    window.location,
    location => location.pathName
  );

export const makeSelectUrl = () =>
  createSelector(
    makeSelectPathname,
    path => {
      if (path.length < 2) return 'https://thread-204819.appspot.com/stream';
      return `https://thread-204819.appspot.com${path}`;
    }
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
