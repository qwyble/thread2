import React from 'react'
import PropTypes from 'prop-types';
import { Loader, Menu } from 'semantic-ui-react';

const LoaderWrapper = props => (
  <div>
    {props.isLoading ? (
      <Menu.Item style={{ padding: '1em 1em' }}>
        <Loader active inverted size="mini" />
      </Menu.Item>
    ) : <div>{props.isOwner ? <div>{props.children}</div> : <div />}</div>}
  </div>
);

LoaderWrapper.propTypes = {
  isLoading: PropTypes.bool,
  isOwner: PropTypes.bool,
  children: PropTypes.element,
}

export default LoaderWrapper;
