import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkWrapper = props => {
  if (!props.isLink) {
    return <span>{props.children}</span>;
  }
  return <Link to={props.to}>{props.children}</Link>;
};

LinkWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  isLink: PropTypes.bool.isRequired,
};

export default LinkWrapper;
