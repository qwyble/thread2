import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const StyledButton = props => (
  <div>
    <Button
      icon
      inverted
      size="mini"
      color="blue"
      floated="right"
      className="button2"
      labelPosition="right"
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  </div>
);

StyledButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default StyledButton;
