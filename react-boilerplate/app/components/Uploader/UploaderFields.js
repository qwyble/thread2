import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'semantic-ui-react';

/* Uploader is the form for uploading songs */
const UploaderFields = props => (
  <div>
    <Form onSubmit={props.onUpload}>
      <Form.Field>
        <Input
          name="songFile"
          type="file"
          multiple
          onChange={props.onInputChange}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="title">Title</label>
        <Input
          id="title"
          type="text"
          name="title"
          placeholder="Title"
          value={props.fields.title}
          onChange={props.onInputChange}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="description">Description</label>
        <Input
          id="description"
          type="text"
          name="description"
          placeholder="Description"
          value={props.fields.description}
          onChange={props.onInputChange}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="genre">Genre</label>
        <Input
          id="genre"
          name="genre"
          type="text"
          value={props.fields.genre}
          onChange={props.onInputChange}
        />
      </Form.Field>
      <Button type="submit" disabled={props.fields.disabled}>
        Upload
      </Button>
    </Form>
  </div>
);

UploaderFields.propTypes = {
  onInputChange: PropTypes.func,
  onUpload: PropTypes.func,
  fields: PropTypes.object.isRequired,
};
export default UploaderFields;
