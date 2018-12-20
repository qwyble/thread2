import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditPlaylistForm extends Component {
  render() {
    return (
      <div>
        <Button
          icon
          inverted
          size="mini"
          floated="right"
          className="trashcan"
          id={props.id}
          name={props.playlist}
          onClick={props.onDeletePlaylist}
        >
         <Icon size="small" name="trash" />
        </Button>
      </div>
    );
  }
}

EditPlaylistForm.propTypes = {

};

export default EditPlaylistForm;
