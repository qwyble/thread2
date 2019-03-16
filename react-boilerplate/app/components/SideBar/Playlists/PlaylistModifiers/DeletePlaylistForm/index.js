import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const DeletePlaylistForm = props => (
  <div style={{ textAlign: 'center' }}>
    <p>
      Are you sure you want to delete <br />
      <span className="highlighted span">{props.plname} </span>?
    </p>
    <Button onClick={props.onDelete}>yes</Button>
    <Button onClick={props.onCancel}>no</Button>
  </div>
);

DeletePlaylistForm.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  plname: PropTypes.string.isRequired,
};

export default DeletePlaylistForm;
