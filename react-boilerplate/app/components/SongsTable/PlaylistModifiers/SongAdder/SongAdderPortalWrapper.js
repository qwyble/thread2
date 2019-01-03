import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Portal, Button } from 'semantic-ui-react';
import SongAdder from 'containers/SongsContainer/PlaylistModifiers/SongAdder';
import { makeSelectNoneSelected } from 'containers/SongsContainer/SongsContainer/selectors';
class AddToPlaylistPortalWrapper extends Component {
  state = {
    isOpen: false,
  };

  portalOpen = () => {
    if (!this.state.isOpen) {
      this.setState({ isOpen: true });
    } else this.setState({ isOpen: false });
  };

  render() {
    return (
      <Portal
        open={this.state.isOpen}
        trigger={
          <Button
            disabled={this.props.disabled}
            onClick={this.isOpen}
            size="mini"
          >
            Add to Playlist
          </Button>
        }
      >
        {this.state.isOpen ? <SongAdder /> : <div />}
      </Portal>
    );
  }
}

AddToPlaylistPortalWrapper.propTypes = {
  disabled: PropTypes.bool,
};

const mapStateToProps = {
  disabled: () => makeSelectNoneSelected(),
};

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(AddToPlaylistPortalWrapper);
