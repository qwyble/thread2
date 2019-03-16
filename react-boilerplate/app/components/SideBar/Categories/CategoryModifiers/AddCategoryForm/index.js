import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Input, Form } from 'semantic-ui-react';
import { Transition } from 'react-transition-group';

require('./css.css');

class RenderAddCategory extends React.Component {
  state = {
    categoryToAdd: '',
    error: '',
    displayForm: false,
    renderForm: false,
  };

  handleInputChange = e => {
    const { value } = e.target;
    this.setState({ categoryToAdd: value, error: '' });
  };

  handleAddClick = () => {
    this.props.onAddCategory(this.state.categoryToAdd);
  };

  validate = () => {
    if (!this.state.categoryToAdd) return true;
    if (this.state.error) return true;
    return false;
  };

  handleToggle = () => {
    if (this.state.renderForm) this.setState({ renderForm: false });
    else this.setState({ renderForm: true });
  };

  handleEnter = () => {
    this.setState({ displayForm: true });
  };

  handleExited = () => {
    this.setState({ displayForm: false });
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
        onEnter={this.handleEnter}
        onExited={this.handleExited}
        in={this.state.renderForm}
        timeout={250}
      >
        {state => (
          <div>
            <div className={className[state]}>
              {this.state.displayForm ? (
                <div className="wide">
                  <button
                    type="button"
                    className="ui button wide"
                    onClick={this.handleToggle}
                  >
                    <Icon floated="right" name="minus" />
                  </button>
                  <input
                    className="ui input new-cat-field"
                    placeholder="new category"
                    onChange={this.handleInputChange}
                    value={this.state.categoryToAdd}
                  />
                  <div>
                    <button
                      className="ui button wide"
                      type="button"
                      onClick={this.handleAddClick}
                      disabled={this.validate()}
                    >
                      <Icon floated="right" name="plus" />
                    </button>
                  </div>
                </div>
              ) : (
                <div />
              )}
            </div>
            {this.state.displayForm ? (
              <div />
            ) : (
              <Button
                fluid
                icon
                inverted
                size="mini"
                color="blue"
                onClick={this.handleToggle}
              >
                <Icon floated="right" name="plus" />
                Category
              </Button>
            )}
          </div>
        )}
      </Transition>
    );
  }
}

RenderAddCategory.propTypes = {
  onAddCategory: PropTypes.func,
};

export default RenderAddCategory;
