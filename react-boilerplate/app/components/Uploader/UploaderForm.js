import React from 'react';
import axios from 'axios';
import UploadDropdown from './UploadModal.js';

const initialState = {
  title: '',
  description: '',
  songFile: [],
  genre: '',
  songURL: '',
  disabled: true,
};

class UploaderForm extends React.Component {
  state = initialState;

  reset = () => {
    this.setState(initialState);
  };

  handleInputChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    const songUploadFields = Object.assign({}, this.state.songUploadFields);
    /* Title and SongFile are required to enable the upload button */
    if (name === 'title' && value.length > 0) {
      this.setState({ uploadButtonToggle: false });
    } else if (name === 'title') {
      this.setState({ uploadButtonToggle: true });
    }
    // in case of songFile, change 'value' to handle file upload
    if (name === 'songFile') {
      value = e.target.files[0];
    }
    // update the state
    songUploadFields[name] = value;
    this.setState({ songUploadFields });
  };

  handleUpload = () => {
    const data = new FormData();
    const songFile = this.state.songUploadFields.songFile;

    data.append('songFile', songFile);
    data.append('title', this.state.songUploadFields.title);
    data.append('description', this.state.songUploadFields.description);
    data.append('genres', this.state.songUploadFields.genre);
    data.append('URL', this.state.songUploadFields.songURL);
    this.setState({ isLoading: true });
    axios({
      method: 'post',
      url: 'https://thread-204819.appspot.com/uploadSong',
      data,
      withCredentials: true,
    }).then(result => {
      // access results....

      this.reset();
    });
  };

  render() {
    return (
      <UploaderFields
        onInputChange={this.handleInputChange}
        fields={this.state}
      />
    );
  }
}

export default UploadHandlers;
