import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Form } from 'semantic-ui-react';

/* renders options to delete, share, and rename the category or playlist */
class RenameCategoryForm extends React.Component {
  state = {
    newName: '',
    err: '',
  };

  handleRenameSubmit = e => {
    e.preventDefault();
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
        <div>Enter a new name:</div>
        <form onSubmit={this.handleRenameSubmit}>
          <div>
            <input
              autoFocus
              type="text"
              className="ui input"
              value={this.state.newName}
              onChange={this.handleRenameChange}
              placeholder={this.props.catname}
            />
          </div>
          <div>{this.state.err}</div>
          <button className="ui button" type="submit">
            Ok
          </button>
          <button
            type="button"
            className="ui button"
            onClick={this.props.onCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

RenameCategoryForm.propTypes = {
  id: PropTypes.number.isRequired,
  onRenameCategory: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  catname: PropTypes.string.isRequired,
};

export default RenameCategoryForm;
