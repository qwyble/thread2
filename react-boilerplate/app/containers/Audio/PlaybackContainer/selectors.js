import { makeSelectSongs } from 'containers/SongsContainer/SongsContainer/selectors';
import { createSelector } from 'reselect';

export const selectPlaybackContainerState = state =>
  state.get('PlaybackContainer');

export const makeSelectNowPlaying = () =>
  createSelector(
    selectPlaybackContainerState,
    state => state.get('nowPlaying')
  );

export const makeSelectNowPlayingId = () =>
  createSelector(
    makeSelectNowPlaying(),
    nowPlaying => nowPlaying.get('idSongs')
  );

export const makeSelectNowPlayingIndex = () =>
  createSelector(
    makeSelectNowPlayingId(),
    makeSelectSongs(),
    (nowPlayingId, songs) =>
      songs.findIndex(song => song.get('idSongs') === nowPlayingId)
  );

export const makeSelectNextSong = () =>
  createSelector(
    makeSelectNowPlayingIndex(),
    makeSelectSongs(),
    (index, songs) => songs.get(index + 1)
  );

export const makeSelectPrevSong = () =>
  createSelector(
    makeSelectNowPlayingIndex(),
    makeSelectSongs(),
    (index, songs) => {
      const newIndex = index - 1;
      if (newIndex < 0) return undefined;
      return songs.get(newIndex);
    }
  );

export const makeSelectLastSong = () =>
  createSelector(
    makeSelectSongs(),
    songs => songs.get(-1)
  );

export const makeSelectIsPaused = () =>
  createSelector(
    selectPlaybackContainerState,
    state => state.get('paused')
  );
