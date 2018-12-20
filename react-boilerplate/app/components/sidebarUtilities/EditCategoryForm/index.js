import React from 'react';
import PropTypes from 'prop-types';
import {
  TransitionablePortal,
  Dropdown,
  Button,
  Segment,
  Input,
  Form,
} from 'semantic-ui-react';


/* renders options to delete, share, and rename the category or playlist */
class EditCategoryForm extends React.Component {
  state = {
    openPortal: false,
    selectValue: '',
    renamePrompt: false,
    newName: '',
    err: '',
  }

  static getDerivedStateFromProps(props, state) {
    if (props.err) return { openPortal: true, err: props.err };
    return { openPortal: false, err: '' };
  }

  handleRenameSubmit = () => {
    const catid = this.props.id;
    const name = this.state.newName;
    if (name.length < 3) {
      this.setState({ err: 'category name must be at least 3 characters' });
      return;
    }
    this.props.onCategoryRename({ catid, name });
  }


  handleOpen = () => {
    this.setState({ openPortal: true, selectValue: '' });
  }


  handleClose = () => {
    this.setState({ openPortal: false });
  }


  handleCategoryDelete = () => {
    if (window.confirm('Are you sure you want to delete the ' + this.props.catName + ' playlist category? \nThese playlists will be lost.')) {
      this.props.onCategoryDelete(this.props.id);
    }
    this.setState({ selectValue: '' });
  }


  handleRenameChange = (e) => {
    this.setState({ newName: e.target.value });
  }

  handleDropdownChange = (e, d) => {
    let val = d.value;
    if (val === 'delete') {
      this.handleCategoryDelete();
    } else if (val === 'rename') {
      this.handleOpen();
    }
  }


  render() {
    const options = [
      { key: 0, text: '', value: '' },
      { key: 1, text: 'rename', value: 'rename' },
      { key: 2, text: 'share', value: 'share' },
      { key: 3, text: 'delete', value: 'delete' },
    ];

    return (
      <div>
        <Dropdown
          text=" "
          icon="ellipsis vertical"
          className="dropOverlay icon"
          options={options}
          value={this.state.selectValue}
          onChange={this.handleDropdownChange}
        />
        <TransitionablePortal onClose={this.handleClose} open={this.state.openPortal}>
          <Segment style={{
            top: '10%',
            left: '15%',
            width: '14%',
            zIndex: 1000
            position: 'fixed',
          }}>
            <p>Enter a new name:</p>
            <Form onSubmit={this.handleRenameSubmit}>
              <Input
                type="text"
                style={{ width: '100%' }}
                value={this.state.newName}
                onChange={this.handleRenameChange}
              />
              {this.state.err}
              <Button type="submit">Ok</Button>
            </Form>
          </Segment>
        </TransitionablePortal>
      </div>
    );
  }
}

EditCategoryForm.propTypes = {
  err: PropTypes.object,
  id: PropTypes.string,
  catName: PropTypes.string,
  onCategoryRename: PropTypes.func,
  onCategoryDelete: PropTypes.func,
}

export default EditCategoryForm;
