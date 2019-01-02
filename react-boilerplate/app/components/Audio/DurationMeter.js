import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

const DurationMeter = props => (
  <div>
    <Grid.Column>
      {props.currentTime} / {props.duration}
    </Grid.Column>

    <Grid.Column className="playerCol" width={9}>
      <input
        type="range"
        min="1"
        max="100"
        value={props.percentPlayed}
        className="songslider"
        onChange={props.onSongPosition}
      />
    </Grid.Column>
  </div>
);

DurationMeter.propTypes = {
  currentTime: PropTypes.string,
  duration: PropTypes.string,
  percentPlayed: PropTypes.number,
  onSongPosition: PropTypes.func,
};

export default DurationMeter;
