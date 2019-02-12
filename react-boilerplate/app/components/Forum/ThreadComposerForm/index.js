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
    const { name, value } = { ...e.target };
    const error = validate(name, value);
    this.setState({ [name]: { value, error } });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onPostThread(this.state);
  };

  render() {
    const disabled = Object.values(this.state).find(
      field => field.error.length
    );

    const CategoryDropdown = (
      <Form.Field required error={!!this.state.category.error}>
        <CategoryDropdownComponent
          name="category"
          placeholder="Choose thread category"
          value={this.state.category.value}
          onChange={this.handleInputChange}
          categories={this.props.categories}
        />
        {this.state.category.error}
      </Form.Field>
    );

    const SubjectComponent = (
      <Form.Field required error={!!this.state.subject.error}>
        <Input
          name="subject"
          placeholder="Subject"
          value={this.state.subject.value}
          onChange={this.handleInputChange}
        />
        {this.state.subject.error}
      </Form.Field>
    );

    const BodyComponent = (
      <Form.Field required error={!!this.state.body.error}>
        <Input
          name="body"
          placeholder="Body"
          value={this.state.body.value}
          onChange={this.handleInputChange}
        />
        {this.state.body.error}
      </Form.Field>
    );

    return (
      <Container>
        <LoaderWrapper isLoading={this.props.isLoading} />
        <Form onSubmit={this.handleFormSubmit}>
          {CategoryDropdown}
          {SubjectComponent}
          {BodyComponent}
          <Button type="submit" disabled={disabled}>
            Post
          </Button>
        </Form>
      </Container>
    );
  }
}

ThreadComposer.propTypes = {
  isLoading: PropTypes.bool,
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
