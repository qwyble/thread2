import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Popup, Icon } from 'semantic-ui-react';

const Volume = props => (
  <div>
    <Grid.Column width={2}>
      <Popup
        trigger={<Icon name="volume up" />}
        hoverable
        style={{
          backgroundColor: 'rgba(0,0,0, .2)',
          borderStyle: 'none',
        }}
      >
        <input
          orient="vertical"
          type="range"
          min="0"
          max="100"
          value={props.volume * 100}
          onChange={props.onVolume}
          className="slider"
          id="myRange"
        />
      </Popup>
    </Grid.Column>
  </div>
);

Volume.propTypes = {
  volume: PropTypes.number,
  onVolume: PropTypes.func,
};

export default Volume;
