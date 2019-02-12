import React from 'react';
import PropTypes from 'prop-types';

import { Container, Form, Button, Input } from 'semantic-ui-react';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import RecipientDropdown from './RecipientDropdown';

class MessageComposer extends React.Component {
  state = {
    recipient: {
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
    const message = {
      recipient: this.state.recipient.value,
      subject: this.state.subject.value,
      body: this.state.body.value,
    };
    this.props.onSendMessage(message);
  };

  render() {
    const disabled = Object.values(this.state).find(
      field => field.error.length
    );

    const RecipientComponent = (
      <Form.Field required error={!!this.state.recipient.error}>
        <RecipientDropdown
          name="recipient"
          placeholder="recipient"
          value={this.state.recipient.value}
          onChange={this.handleInputChange}
          users={this.props.users}
          isLoading={this.props.usersAreLoading}
        />
        {this.state.recipient.error}
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
          {RecipientComponent}
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

MessageComposer.propTypes = {
  isLoading: PropTypes.bool,
  onSendMessage: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  usersAreLoading: PropTypes.bool,
};

export default MessageComposer;

const validate = (name, value) => {
  if (name === 'recipient') return validateRecipient(value);
  if (name === 'subject') return validateSubject(value);
  if (name === 'body') return validateBody(value);
  return '';
};

const validateRecipient = value => {
  if (!value) return 'Recipient is required.';
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
