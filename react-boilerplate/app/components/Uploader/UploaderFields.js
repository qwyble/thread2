import React from 'react';
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
        <label>Title</label>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={props.fields.title}
          onChange={props.onInputChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <Input
          type="text"
          name="description"
          placeholder="Description"
          value={props.fields.description}
          onChange={props.onInputChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Genre</label>
        <Input
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
export default UploaderFields;
