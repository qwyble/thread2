import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const PlayIcon = props => (
  <div>
    {props.isPlaying ? (
      <Icon name="pause circle outline" />
    ) : (
      <Icon name="play circle outline" />
    )}
  </div>
);

PlayIcon.propTypes = {
  isPlaying: PropTypes.bool,
};

export default PlayIcon;
