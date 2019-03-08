import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const StyledButton = props => (
  <Button
    style={{ width: '100%' }}
    icon
    inverted
    size="mini"
    color="blue"
    className="button2"
    labelPosition="right"
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default StyledButton;
