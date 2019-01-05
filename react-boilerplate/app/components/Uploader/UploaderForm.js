import React from 'react';
import PropTypes from 'prop-types';

import UploaderFields from 'components/Uploader/UploaderFields';

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

  handleInputChange = e => {
    let { name, value, files } = { ...e.target }; // eslint-disable-line

    if (name === 'songFile') this.setState({ [name]: files[0] });
    else this.setState({ [name]: value });
  };

  validate = () => {
    if (this.state.title.length < 1) this.setState({ disabled: true });
    else if (this.state.songFile.length < 1) this.setState({ disabled: true });
    else this.setState({ disabled: false });
  };

  handleUpload = e => {
    e.preventDefault();
    this.props.onUploadSong(this.state);
  };

  render() {
    return (
      <UploaderFields
        onInputChange={this.handleInputChange}
        onUpload={this.handleUpload}
        fields={this.state}
      />
    );
  }
}

UploaderForm.propTypes = {
  onUploadSong: PropTypes.func,
};

export default UploaderForm;
