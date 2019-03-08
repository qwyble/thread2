import React from 'react';
import PropTypes from 'prop-types';

import { Container, Form, Button, Input } from 'semantic-ui-react';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import CategoryDropdownComponent from './CategoryDropdownComponent';

class ThreadComposer extends React.Component {
  state = {
    category: {
      value: '',
      error: '',
    },
    subject: {
      value: '',
      error: '',
    },
    body: {
      value: '',
      error: '',
    },
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    const error = validate(name, value);
    this.setState({ [name]: { value, error } });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onPostThread(this.state);
  };

  render() {
    const disabled = !!Object.values(this.state).find(
      field => field.error.length
    );

    const CategoryDropdown = (
      <div className="form-group">
        <CategoryDropdownComponent
          name="category"
          placeholder="Choose thread category"
          onSelect={this.handleInputChange}
          categories={this.props.categories}
        />
        {this.state.category.error}
      </div>
    );

    const SubjectComponent = (
      <div className="form-group">
        <div>
          <input
            name="subject"
            placeholder="Subject"
            className="ui input form-control"
            autoComplete="off"
            value={this.state.subject.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div>{this.state.subject.error}</div>
      </div>
    );

    const BodyComponent = (
      <div className="form-group">
        <div>
          <input
            name="body"
            placeholder="Body"
            className="ui input form-control"
            autoComplete="off"
            value={this.state.body.value}
            onChange={this.handleInputChange}
          />
        </div>
        <div>{this.state.body.error} </div>
      </div>
    );

    return (
      <Container>
        <LoaderWrapper isLoading={this.props.isLoading} />
        <form onSubmit={this.handleFormSubmit}>
          {CategoryDropdown}
          {SubjectComponent}
          {BodyComponent}
          <Button type="submit" disabled={disabled}>
            Post
          </Button>
        </form>
      </Container>
    );
  }
}

ThreadComposer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onPostThread: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
};

export default ThreadComposer;

const validate = (name, value) => {
  if (name === 'category') return validateCategory(value);
  if (name === 'subject') return validateSubject(value);
  if (name === 'body') return validateBody(value);
};

const validateCategory = value => {
  if (!value) return 'category is required';
  return '';
};
const validateSubject = value => {
  if (value.length < 3) return 'Subject must be > 3 characters';
  return '';
};
const validateBody = value => {
  if (value.length < 10) return 'body must be > 10 characters';
  return '';
};
