import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Form } from 'semantic-ui-react';

/* renders options to delete, share, and rename the category or playlist */
class EditCategoryForm extends React.Component {
  state = {
    newName: '',
    err: '',
  };

  static getDerivedStateFromProps(props) {
    if (props.err) return { err: props.err };
    return null;
  }

  handleRenameSubmit = () => {
    const catid = this.props.id;
    const name = this.state.newName;
    if (name.length < 3) {
      this.setState({ err: 'category name must be at least 3 characters' });
      return;
    }
    this.props.onRenameCategory({ catid, name });
  };

  handleRenameChange = e => {
    this.setState({ newName: e.target.value });
  };

  render() {
    return (
      <div>
        <p>Enter a new name:</p>
        <Form onSubmit={this.handleRenameSubmit}>
          <Input
            type="text"
            style={{ width: '100%' }}
            value={this.state.newName}
            onChange={this.handleRenameChange}
          />
          {this.state.err}
          <Button onClick={this.props.onCancel}>Cancel</Button>
          <Button type="submit">Ok</Button>
        </Form>
      </div>
    );
  }
}

EditCategoryForm.propTypes = {
  err: PropTypes.object,
  id: PropTypes.string,
  catName: PropTypes.string,
  onRenameCategory: PropTypes.func,
  onCancel: PropTypes.func,
};

export default EditCategoryForm;
