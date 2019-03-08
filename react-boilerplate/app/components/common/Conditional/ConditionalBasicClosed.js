import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Button } from 'semantic-ui-react';

class Conditional extends React.Component {
  state = {
    renderChild: false,
  };

  toggleOpen = () => {
    if (this.state.renderChild) this.setState({ renderChild: false });
    else this.setState({ renderChild: true });
  };

  render() {
    return (
      <div>
        {this.state.renderChild ? (
          <Segment>
            {React.cloneElement(this.props.children, {
              closeChild: this.toggleOpen,
            })}
          </Segment>
        ) : (
          <div>
            <Button onClick={this.toggleOpen} {...this.props.buttonProps} />
          </div>
        )}
      </div>
    );
  }
}

Conditional.propTypes = {
  trigger: PropTypes.element,
  children: PropTypes.node.isRequired,
  buttonProps: PropTypes.object,
};

export default Conditional;
