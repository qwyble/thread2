import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const DeleteCategoryForm = props => (
  <div>
    <p>
      Are you sure you want to delete the
      {props.catname}
      category?
    </p>
    <Button onClick={props.onDelete}>yes</Button>
    <Button onClick={props.onCancel}>no</Button>
  </div>
);

DeleteCategoryForm.propTypes = {
  onDelete: PropTypes.func,
  onCancel: PropTypes.func,
  catname: PropTypes.string,
};

export default DeleteCategoryForm;
