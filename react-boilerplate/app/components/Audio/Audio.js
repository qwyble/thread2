import React from 'react';
import PropTypes from 'prop-types';

const Audio = props => (
  <audio
    autoPlay
    id="audio"
    controls=""
    className="audioContainer"
    src={props.URL}
    ref={props.myRef}
    onEnded={props.onEnd}
  />
);

Audio.propTypes = {
  myRef: PropTypes.object.isRequired,
  URL: PropTypes.string.isRequired,
  onEnd: PropTypes.func,
};

export default Audio;
