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

  handleRenameSubmit = () => {
    const plid = { ...this.props.plid };
    const plname = this.state.newName;
    if (plname.length < 3) {
      this.setState({ err: 'category name must be at least 3 characters' });
      return;
    }
    this.props.onRenamePlaylist({ plid, plname });
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
            placeholder={this.props.plname}
          />
          {this.state.err}
          <Button onClick={this.props.onCanel}>Cancel</Button>
          <Button type="submit">Ok</Button>
        </Form>
      </div>
    );
  }
}

RenamePlaylistForm.propTypes = {
  err: PropTypes.object.isRequired,
  plid: PropTypes.string.isRequired,
  plname: PropTypes.string.isRequired,
  onRenamePlaylist: PropTypes.func,
  onCancel: PropTypes.func,
};

export default RenamePlaylistForm;
