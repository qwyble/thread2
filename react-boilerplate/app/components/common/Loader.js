import React from 'react';

require('./css.css');

const Loader = props => {
  console.log(props);
  return (
    <div>
      <span>{props.message ? <span>{props.message}</span> : <span />}</span>
      <span className="loading-indicator" />
    </div>
  );
};

export default Loader;
