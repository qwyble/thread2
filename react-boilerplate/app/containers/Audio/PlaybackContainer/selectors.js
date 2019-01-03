import { makeSelectSongs } from 'containers/SongsContainer/SongsContainer/selectors';
import { createSelector } from 'reselect';

export const selectPlaybackContainerState = state =>
  state.get('playbackContainer');

export const makeSelectNowPlaying = () =>
  createSelector(
    selectPlaybackContainerState,
    state => state.get('nowPlaying')
  );

export const makeSelectNowPlayingId = () =>
  createSelector(
    makeSelectNowPlaying,
    nowPlaying => nowPlaying.get('idSongs')
  );

export const makeSelectNowPlayingIndex = () =>
  createSelector(
    makeSelectNowPlayingId,
    makeSelectSongs,
    (nowPlayingId, songs) =>
      songs.findIndex(song => song.idSongs === nowPlayingId)
  );

export const makeSelectNextSong = () =>
  createSelector(
    makeSelectNowPlayingIndex,
    makeSelectSongs,
    (index, songs) => {
      const nextSong = songs[index + 1];
      return nextSong;
    }
  );

export const makeSelectPrevSong = () =>
  createSelector(
    makeSelectNowPlayingIndex,
    makeSelectSongs,
    (index, songs) => {
      const prevSong = songs[index - 1];
      return prevSong;
    }
  );

export const makeSelectIsPaused = () =>
  createSelector(
    selectPlaybackContainerState,
    state => state.get('paused')
  );
