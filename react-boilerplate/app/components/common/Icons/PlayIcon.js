import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const PlayIcon = props => (
  <div>
    {props.isPlaying ? (
      <Icon onClick={props.onClick} name="pause circle outline" />
    ) : (
      <Icon onClick={props.onClick} name="play circle outline" />
    )}
  </div>
);

PlayIcon.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default PlayIcon;
