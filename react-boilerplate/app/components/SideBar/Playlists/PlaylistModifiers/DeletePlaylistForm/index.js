import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const DeletePlaylistForm = props => (
  <div>
    <p>
      Are you sure you want to delete the
      {props.playlist}
      playlist?
    </p>
    <Button onClick={props.onCancel}>no</Button>
    <Button onClick={props.onDelete}>yes</Button>
  </div>
);

DeletePlaylistForm.propTypes = {
  onDelete: PropTypes.func,
  onCancel: PropTypes.func,
  playlist: PropTypes.string,
};

export default DeletePlaylistForm;
