import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Popup, Icon } from 'semantic-ui-react';

class Volume extends React.Component {
  state = {
    volume: 0.5,
  };

  handleVolume = e => {
    const volume = e.target.value / 100;
    this.props.myRef.current.volume = volume;
    this.setState({ volume });
  };

  render() {
    return (
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
              value={this.state.volume * 100}
              onChange={this.handleVolume}
              className="slider"
              id="myRange"
            />
          </Popup>
        </Grid.Column>
      </div>
    );
  }
}

Volume.propTypes = {
  myRef: PropTypes.object,
};

export default Volume;
