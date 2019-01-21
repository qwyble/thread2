import React from 'react';
import PropTypes from 'prop-types';

const Timer = props => (
  <div className="col">
    {this.state.currentTime} / {this.state.duration}
  </div>
);

Timer.propTypes = {};

export default Timer;
