import React from 'react';
import { Button, Portal } from 'semantic-ui-react';
import ClonePortalContainer from 'containers/SongsContainer/ClonePortalContainer';

class ClonePortalWrapper extends React.Component {
  state = {
    openPortal: false,
  };

  openPortal = () => {
    if (this.state.openPortal) this.setState({ openPortal: false });
    else this.setState({ openPortal: true });
  };

  render() {
    return (
      <span style={{ display: 'inline-block' }}>
        <Button size="mini" inverted color="blue" onClick={this.openPortal}>
          {' '}
          Clone Playlist{' '}
        </Button>
        {this.state.openPortal ? (
          <Portal open={this.state.openPortal}>
            <ClonePortalContainer onClosePortal={this.openPortal} />
          </Portal>
        ) : (
          <div />
        )}
      </span>
    );
  }
}

export default ClonePortalWrapper;
