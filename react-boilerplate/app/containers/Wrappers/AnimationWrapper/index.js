import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

class AnimationWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderLists: '',
    };
  }

  handleExited = () => {
    this.setState({ renderLists: false });
  };

  handleEnter = () => {
    this.setState({ renderLists: true });
  };

  render() {
    const className = {
      entering: 'listSidebar displayed',
      entered: 'listSidebar displayed',
      exiting: 'listSidebar',
      exited: 'listSidebar',
    };

    return (
      <Transition
        onExited={this.handleExited}
        onEnter={this.handleEnter}
        in={this.props.displayLists}
        timeout={150}
      >
        {state => (
          <div className={className[state]}>
            {this.state.renderLists ? (
              <div>{this.props.children}</div>
            ) : (
              <div />
            )}
          </div>
        )}
      </Transition>
    );
  }
}

AnimationWrapper.propTypes = {
  displayLists: PropTypes.bool,
  children: PropTypes.node,
};

export default AnimationWrapper;
