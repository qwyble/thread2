import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const StyledButton = props => (
  <div>
    <Button
      inverted
      icon
      className="sidebarButton"
      attached="right"
      color="blue"
      onClick={props.toggleVis}
    >
      <Icon name={props.visible ? 'left arrow' : 'right arrow'} />
    </Button>
  </div>
);

StyledButton.propTypes = {
  toggleVis: PropTypes.func,
  visible: PropTypes.bool,
};

export default StyledButton;
