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
    const trigger = <Button>Edit Image</Button>;
    return (
      <div>
        <PortalWrapper trigger={trigger}>
          <Segment
            compact
            padded
            raised
            secondary
            textAlign="center"
            style={{ margin: 'auto', top: '-300px' }}
          >
            <LoaderWrapper isLoading={this.props.imageLoading} />
            <Image
              src={this.state.imageUrl || this.props.imageUrl}
              style={{ margin: 'auto' }}
            />
            <Form onSubmit={this.handleImageUpload}>
              <input
                name="image"
                type="file"
                onChange={this.handleImageChange}
              />
              <Button type="submit" disabled={!this.state.imageFile}>
                {' '}
                Submit{' '}
              </Button>
            </Form>
          </Segment>
        </PortalWrapper>
      </div>
    );
  }
}

ImageUploadPortal.propTypes = {
  onImageUpload: PropTypes.func,
  imageUrl: PropTypes.func,
  imageLoading: PropTypes.func,
};

export default ImageUploadPortal;
