import React from 'react';
import { Transition } from 'react-transition-group';
import { Form, Input, Button } from 'semantic-ui-react';


class RenderAddPlaylist extends React.Component {
  state = {
    renderAdd: false,
    openForm: false,
    toggleSubmit: true,
    playlistToAdd: '',
  }

  handleFormSubmit = () => {
    this.props.onAddPlaylist(this.state.playlistToAdd);
    this.handleOpenForm();
  }

  handleOpenForm = () => {
    if (this.state.openForm) { this.setState({ openForm: false }); } else { this.setState({ openForm: true }); }
  }

  handleInputChange = (e) => {
    if (e.target.value.length > 2) {
      this.setState({
        ...this.state,
        playlistToAdd: e.target.value,
        toggleSubmit: false,
      });
    } else {
      this.setState({
        ...this.state,
        playlistToAdd: e.target.value,
        toggleSubmit: true,
      });
    }
  }


  handleEnter = () => {
    this.setState({ renderAdd: true });
  }

  handleExited = () => {
    this.setState({ renderAdd: false });
  }


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
          <Button
            fluid
            inverted
            size="mini"
            color="blue"
            className="button2"
            onClick={this.handleOpenForm}
          >
            <Icon name={this.state.openForm ? 'minus' : 'plus'} />
            Playlist
          </Button>
        </div>

        <Transition
          onExited={this.handleExited}
          onEnter={this.handleEnter}
          in={this.state.openForm}
          timeout={250}
        >
          {
            state => (
              <div className={className[state]}>
                {this.state.renderAdd
                  ? (
                    <Form onSubmit={this.handleFormSubmit}>
                      <Input
                        size="mini"
                        placeholder="new playlist"
                        value={this.props.playlistToAdd}
                        onChange={this.props.onInputChange}
                      />
                      <Button
                        fluid
                        inverted
                        size="mini"
                        icon="plus"
                        color="blue"
                        className="button2"
                        disabled={this.props.toggleSubmit}
                      />
                    </Form>
                  )
                  : <div></div>
                }
              </div>
            )
          }
        </Transition>
      </div>
    );
  }
}

export default RenderAddPlaylist;
