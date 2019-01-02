import React from 'react';
import PropTypes from 'prop-types';

const Audio = props => (
  <div>
    <audio
      autoPlay
      id="audio"
      controls=""
      className="audioContainer"
      src={props.URL}
      ref={props.myRef}
      onEnded={props.onEnd}
    />
  </div>
);

Audio.propTypes = {
  myRef: PropTypes.node,
  URL: PropTypes.string,
  onEnd: PropTypes.func,
};

export default Audio;
