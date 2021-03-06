import React from 'react';
import PropTypes from 'prop-types';

import { Container, Form, Button, Input } from 'semantic-ui-react';
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

    return (
      <Container>
        <LoaderWrapper isLoading={this.props.isLoading} />
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field required error={!!this.state.category.error}>
            <CategoryDropdownComponent
              name="category"
              placeholder="Choose thread category"
              value={this.state.category.value}
              onChange={this.handleInputChange}
              getForumCategories={this.props.getForumCategories}
            />
            {this.state.category.error}
          </Form.Field>

          <Form.Field required error={!!this.state.subject.error}>
            <Input
              name="subject"
              placeholder="Subject"
              value={this.state.subject.value}
              onChange={this.handleInputChange}
            />
            {this.state.subject.error}
          </Form.Field>

          <Form.Field required error={!!this.state.body.error}>
            <Input
              name="body"
              placeholder="Body"
              value={this.state.body.value}
              onChange={this.handleInputChange}
            />
            {this.state.body.error}
          </Form.Field>

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
  onPostThread: PropTypes.func,
  categories: PropTypes.array,
  getForumCategories: PropTypes.func,
};

export default ThreadComposer;

const threadPost = (subject, body, category) =>
  axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/postThread',
    data: {
      subject,
      body,
      category,
      date: new Date()
        .toISOString()
        .substring(0, 19)
        .replace('T', ' '),
    },
    withCredentials: true,
  });

const validate = (name, value) => {
  if (name === 'category') {
    if (!value) return 'Category is required';
    return '';
  }
  if (name === 'subject') {
    if (value.length < 3) return 'Subject must be > 3 characters';
    return '';
  }
  if (name === 'body') {
    if (value.length < 10) return 'body must be > 10 characters';
    return '';
  }
  return '';
};
