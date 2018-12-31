import React from 'react';
import PropTypes from 'prop-types';
import { Portal, Button  } from 'semantic-ui-react';

const PortalWrapper = props => {
  <div>
    <Portal open={props.isOpen} trigger={props.trigger}>
      {props.children}
    </Portal>
  </div>
}
