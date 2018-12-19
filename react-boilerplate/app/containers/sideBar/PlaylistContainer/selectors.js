import { createSelector } from 'reselect';

export const makeSelectPlaylistParam = () => createSelector(
  makeSelectParams,
  params => params.get('playlist')
);
