import React from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Portal from 'components/common/Modals/Portal';
import PropChecker from 'components/common/Conditional/PropChecker';

import DeletePlaylist from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/DeletePlaylist';
import RenamePlaylist from 'containers/SideBar/PlaylistContainer/PlaylistModifiers/RenamePlaylist';

import {
  makeSelectWhichPortal,
  makeSelectEditedPlaylistId,
  makeSelectEditedPlaylistName,
  makeSelectIsOpen,
} from './selectors';
import { setEditedPlaylist } from './actions';

class EditPlaylistPortal extends React.Component {
  handleClosePortal = () => {
    this.props.setEditedPlaylist(fromJS({}), -1);
  };

  render() {
    const portalProps = {
      id: this.props.plid,
      plname: this.props.plname,
      onClosePortal: this.handleClosePortal,
    };

    return (
      <Portal
        centered
        dimmer
        onClose={this.handleClosePortal}
        isOpen={this.props.isOpen}
      >
        <PropChecker field={this.props.isOpen}>
          {this.props.whichPortal === 2 && <DeletePlaylist {...portalProps} />}
          {this.props.whichPortal === 0 && <RenamePlaylist {...portalProps} />}
        </PropChecker>
      </Portal>
    );
  }
}

EditPlaylistPortal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  plid: PropTypes.number,
  plname: PropTypes.string,
  whichPortal: PropTypes.number.isRequired,
  setEditedPlaylist: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  whichPortal: makeSelectWhichPortal(),
  isOpen: makeSelectIsOpen(),
  plid: makeSelectEditedPlaylistId(),
  plname: makeSelectEditedPlaylistName(),
});

const mapDispatchToProps = {
  setEditedPlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(EditPlaylistPortal);
