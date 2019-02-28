import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Form, Button, Image } from 'semantic-ui-react';

import PortalWrapper from 'components/common/PortalWrapper';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

class ImageUploadPortal extends Component {
  state = {
    imageUrl: '',
    imageFile: {},
  };

  handleImageChange = e => {
    const url = window.URL.createObjectURL(e.target.files[0]);
    this.setState({ imageUrl: url, imageFile: e.target.files[0] });
  };

  handleImageUpload = () => {
    this.props.onImageUpload(this.state.imageFile, this.state.imageUrl);
  };

  render() {
    return (
      <PortalWrapper trigger={trigger} x="28vw" y="15vh">
        <LoaderWrapper isLoading={this.props.imageLoading} />
        <div className="image medium">
          <img src={this.state.imageUrl || this.props.imageUrl} alt="profile" />
        </div>
        <Form onSubmit={this.handleImageUpload}>
          <input name="image" type="file" onChange={this.handleImageChange} />
          <Button type="submit" disabled={!this.state.imageFile}>
            {' '}
            Submit{' '}
          </Button>
        </Form>
      </PortalWrapper>
    );
  }
}

ImageUploadPortal.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageLoading: PropTypes.bool.isRequired,
};

export default ImageUploadPortal;

const trigger = (
  <button type="button" className="ui button">
    Edit Image
  </button>
);
