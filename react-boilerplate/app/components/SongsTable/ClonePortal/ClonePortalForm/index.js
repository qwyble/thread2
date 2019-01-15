import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Dropdown, Button, Input } from 'semantic-ui-react';

class ClonePortalForm extends React.Component {
  state = {
    selectedCatId: '',
    selectedCatName: '',
    plname: '',
    error: '',
    disabled: true,
  };

  handleInputChange = e => {
    const plname = e.target.value;
    this.setState({ plname }, () => {
      this.validateInput();
    });
  };

  handleCatSelect = (e, d) => {
    this.setState({ selectedCatId: d.value, selectedCatName: d.text }, () => {
      this.validateInput();
    });
  };

  validateInput = () => {
    if (this.state.plname.length < 2) {
      this.setState({
        error: 'playlist name must be at least two characters',
        disabled: true,
      });
    } else if (!this.state.selectedCatId) {
      this.setState({ error: 'you must select a category', disabled: true });
    } else {
      this.setState({ error: '', disabled: false });
    }
  };

  handleClonePlaylist = () => {
    this.props.onClonePlaylist(
      this.state.selectedCatId,
      this.state.plname,
      this.props.plToClone
    );
  };

  render() {
    return (
      <div>
        <Segment>
          <Dropdown text={this.state.selectedCatName || 'Select Category: '}>
            <Dropdown.Menu>
              {this.props.categories.map((cat, i) => (
                <Dropdown.Item
                  key={i}
                  onClick={this.handleCatSelect}
                  value={cat.idcategories}
                  text={cat.name}
                />
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Segment>
        <div>playlist name:</div>
        <Segment>
          <Input size="mini" onChange={this.handleInputChange} />
        </Segment>
        <Button onClick={this.props.onClosePortal}>Cancel</Button>
        <Button
          disabled={this.state.disabled}
          onClick={this.props.handleClonePlaylist}
        >
          Submit
        </Button>
        {this.state.error}
      </div>
    );
  }
}

ClonePortalForm.propTypes = {
  categories: PropTypes.array,
  onClonePlaylist: PropTypes.func,
  onClosePortal: PropTypes.func,
  plToClone: PropTypes.object,
};

export default ClonePortalForm;
