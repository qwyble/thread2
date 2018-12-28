import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Dropdown, Button, Input } from 'semantic-ui-react';

const ClonePortalForm = props => (
  <div>
    <Segment>
      <Dropdown text={props.selectedCatName || 'Select Category: '}>
        <Dropdown.Menu>
          {props.categories.map((cat, i) => (
            <Dropdown.Item
              key={i}
              onClick={props.onCatSelect}
              value={cat.idcategories}
              text={cat.name}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Segment>
    <div>Enter a new playlist name:</div>
    <Segment>
      <Input size="mini" onChange={props.onInputChange} />
    </Segment>
    <Button disabled={props.disabled} onClick={props.onClonePlaylist}>
      Submit
    </Button>
  </div>
);

ClonePortalForm.propTypes = {
  disabled: PropTypes.bool,
  categories: PropTypes.array,
  onCatSelect: PropTypes.func,
  onInputChange: PropTypes.func,
  onClonePlaylist: PropTypes.func,
  selectedCatName: PropTypes.string,
};

export default ClonePortalForm;
