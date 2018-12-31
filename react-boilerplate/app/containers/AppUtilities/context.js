import React from 'react';

const AppContext = React.createContext();

// context controls audio playback and
// isOwner for modifying views based on whether
// the user owns the view.

class AppProvider extends React.Component {
  state = {
    songs: [],
    paused: true,
    nowPlaying: {},
    onEnd: this.handleEnd,
    onPlaying: this.handlePlaying,
    onPausing: this.handlePausing,
    skipBack: this.handleSkipBack,
    onSetSongs: this.handleSetSongs,
  };

  handleSetSongs = (songs) => {
    this.setState({ songs });
  };

  handlePlaying = (song) => {
    this.setState({
      nowPlaying: song,
      paused: false,
    });
  };

  handlePausing = () => {
    if (this.state.paused) {
      this.handlePlaying(this.state.nowPlaying);
    } else {
      this.setState({ paused: true });
    }
  };

  handleEnd = () => {
    const currentId = this.state.nowPlaying.idSongs;
    const index = this.state.songs.findIndex(
      song => song.idSongs === currentId,
    );
    const nextSong = this.state.songs[index + 1];

    if (nextSong) {
      this.handlePlaying(nextSong);
    } else {
    }
  };

  handleSkipBack = () => {
    const currentId = this.state.nowPlaying.idSongs;
    const index = this.state.songs.findIndex(
      song => song.idSongs === currentId,
    );

    const prevSong = this.state.songs[index - 1];

    if (prevSong) {
      this.handlePlaying(prevSong);
    } else {
      this.handlePlaying(this.state.nowPlaying);
    }
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppProvider, AppContext };
