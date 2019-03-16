import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from 'react-transition-group';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

class AddPlaylistForm extends React.Component {
  state = {
    renderAdd: false,
    openForm: false,
    toggleSubmit: true,
    playlistToAdd: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onAddPlaylist(this.state.playlistToAdd);
    this.handleOpenForm();
  };

  handleOpenForm = () => {
    if (this.state.openForm) {
      this.setState({ openForm: false, playlistToAdd: '' });
    } else {
      this.setState({ openForm: true });
    }
  };

  handleInputChange = e => {
    if (e.target.value.length > 2) {
      this.setState({
        playlistToAdd: e.target.value,
        toggleSubmit: false,
      });
    } else {
      this.setState({
        playlistToAdd: e.target.value,
        toggleSubmit: true,
      });
    }
  };

  handleEnter = () => {
    this.setState({ renderAdd: true });
  };

  handleExited = () => {
    this.setState({ renderAdd: false });
  };

  render() {
    const className = {
      entering: 'listSidebar displayed',
      entered: 'listSidebar displayed',
      exiting: 'listSidebar',
      exited: 'listSidebar',
    };

    return (
      <div>
        <div>
          <button
            type="button"
            className="ui button"
            onClick={this.handleOpenForm}
          >
            <LoaderWrapper isLoading={this.props.isLoading}>
              <FontAwesomeIcon
                icon={this.state.openForm ? 'minus' : 'plus'}
                style={{ color: 'aliceblue' }}
              />
              <div style={{ flexGrow: '1' }} />
            </LoaderWrapper>
          </button>
        </div>

        <Transition
          onExited={this.handleExited}
          onEnter={this.handleEnter}
          in={this.state.openForm}
          timeout={250}
        >
          {state => (
            <div className={className[state]}>
              {this.state.renderAdd ? (
                <form
                  onSubmit={this.handleFormSubmit}
                  style={{ width: '100%' }}
                >
                  <div style={{ width: '100%' }}>
                    <input
                      style={{ width: '70%' }}
                      className="ui input"
                      placeholder="new playlist"
                      value={this.state.playlistToAdd}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="ui button"
                      disabled={this.state.toggleSubmit}
                    >
                      <FontAwesomeIcon icon="plus" />
                    </button>
                  </div>
                </form>
              ) : (
                <div />
              )}
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

AddPlaylistForm.propTypes = {
  onAddPlaylist: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default AddPlaylistForm;
