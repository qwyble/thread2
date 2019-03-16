import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const DeleteCategoryForm = props => (
  <div style={{ textAlign: 'center' }}>
    <p>
      Are you sure you want to delete{' '}
      <span className="highlighted span">{props.catname}</span> ? <br />
      <span className="warning">(all child playlists will be deleted)</span>
    </p>
    <Button onClick={props.onDelete}>yes</Button>
    <Button onClick={props.onCancel}>no</Button>
  </div>
);

DeleteCategoryForm.propTypes = {
  onDelete: PropTypes.func,
  onCancel: PropTypes.func,
  catname: PropTypes.string.isRequired,
};

export default DeleteCategoryForm;
