import React from 'react';
import PropTypes from 'prop-types';
import { Button, Portal } from 'semantic-ui-react';
import { Link } from 'react-router';

const SuccessPortal = props => (
  <div>
    {props.didSucceed ? (
      <Portal open={props.didSucceed}>
        {props.children}
        <div>
          <Link to={props.to}>
            <Button>ok</Button>
          </Link>
        </div>
      </Portal>
    ) : (
      <div />
    )}
  </div>
);

SuccessPortal.propTypes = {
  didSucceed: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default SuccessPortal;
