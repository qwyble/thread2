import React from 'react';
import PropTypes from 'prop-types';

const PropChecker = ({ field, children, alt }) => {
  let shouldRender;

  if (typeof field === 'object') {
    shouldRender = !!field.size;
  } else shouldRender = field;

  return (
    <div>
      {shouldRender ? (
        <div>{children}</div>
      ) : (
        <div>{alt ? <div>{alt}</div> : <div />}</div>
      )}
    </div>
  );
};

PropChecker.propTypes = {
  children: PropTypes.node.isRequired,
  alt: PropTypes.element,
  field: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.element.isRequired,
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default PropChecker;
