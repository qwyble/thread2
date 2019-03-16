import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Form } from 'semantic-ui-react';

/* renders options to delete, share, and rename the category or playlist */
class RenamePlaylistForm extends React.Component {
  state = {
    newName: '',
    err: '',
  };

  static getDerivedStateFromProps(props) {
    if (props.err) return { err: props.err };
    return null;
  }

  handleRenameSubmit = e => {
    e.preventDefault();
    const plname = this.state.newName;
    if (plname.length < 3) {
      this.setState({ err: 'category name must be at least 3 characters' });
      return;
    }
    this.props.onRenamePlaylist(plname);
  };

  handleRenameChange = e => {
    this.setState({ newName: e.target.value });
  };

  render() {
    return (
      <div>
        <p>Enter a new name:</p>
        <form onSubmit={this.handleRenameSubmit}>
          <div>
            <input
              className="ui input"
              type="text"
              value={this.state.newName}
              onChange={this.handleRenameChange}
              placeholder={this.props.plname}
            />
          </div>
          <div>{this.state.err}</div>
          <div>
            <button
              type="button"
              className="ui button"
              onClick={this.props.onCancel}
            >
              Cancel
            </button>
            <button type="submit" className="ui button">
              Ok
            </button>
          </div>
        </form>
      </div>
    );
  }
}

RenamePlaylistForm.propTypes = {
  plname: PropTypes.string.isRequired,
  onRenamePlaylist: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default RenamePlaylistForm;
