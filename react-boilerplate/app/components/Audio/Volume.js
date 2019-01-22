import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Button, Portal, Icon } from 'semantic-ui-react';

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
      <div className="col-xs-6 col-sm-4 col-md-1 volume-column">
        <Portal
          closeOnTriggerClick
          openOnTriggerClick
          trigger={
            <Button icon size="mini">
              <Icon name="volume up" />
            </Button>
          }
        >
          <Segment className="volume-segment">
            <input
              orient="vertical"
              type="range"
              min="0"
              max="100"
              value={this.state.volume * 100}
              onChange={this.handleVolume}
              className="volume-slider"
              id="myRange"
            />
          </Segment>
        </Portal>
      </div>
    );
  }
}

Volume.propTypes = {
  myRef: PropTypes.object,
};

export default Volume;
