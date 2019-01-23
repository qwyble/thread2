import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayIcon = props => (
  <div>
    {props.isPlaying ? (
      <FontAwesomeIcon
        onClick={props.onClick}
        icon="pause"
        className="table-pause-icon"
      />
    ) : (
      <FontAwesomeIcon onClick={props.onClick} icon="play" />
    )}
  </div>
);

PlayIcon.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default PlayIcon;
