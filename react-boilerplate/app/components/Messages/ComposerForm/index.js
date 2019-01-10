import React from 'react';
import axios from 'axios';
import {
  Container,
  Dimmer,
  Form,
  Loader,
  Button,
  Icon,
  TextArea,
  Input,
} from 'semantic-ui-react';
import DropdownComponent from './EmailDropdown';

class Composer extends React.Component {
  state = {
    message: {
      recipient: null,
      subject: '',
      body: '',
    },
    fieldErrors: {
      recipient: '',
      subject: '',
      body: '',
    },
    isLoading: false,
    success: false,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.recipient !== state.message.recipient) {
      const message = { ...state.message };
      message.recipient = props.recipient;
      return { message };
    }
    return {};
  }

  handleInputChange = ({ name, value, error }) => {
    const message = { ...this.state.message };
    const fieldErrors = { ...this.state.fieldErrors };

    message[name] = value;
    fieldErrors[name] = error;

    this.setState({ message, fieldErrors });
  };

  validate = () => {
    const message = { ...this.state.message };
    const fieldErrors = { ...this.state.fieldErrors };
    const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

    if (!message.recipient) return true;
    if (!message.subject) return true;
    if (!message.body) return true;
    if (errMessages.length) return true;

    return false;
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.validate()) return;

    this.sendMessageToDb();
  };

  sendMessageToDb = () => {
    this.setState({ isLoading: true });

    messagePost(
      this.state.message.subject,
      this.state.message.body,
      this.state.message.recipient
    ).then(() => {
      this.setState({
        isLoading: false,
        success: true,
        message: {
          recipient: null,
          subject: '',
          body: '',
        },
      });
    });
  };

  render() {
    return (
      <Container>
        {this.state.isLoading ? (
          <Dimmer inverted active>
            <Loader active />
          </Dimmer>
        ) : (
          <div />
        )}

        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field required error={!!this.state.fieldErrors.recipient}>
            <DropdownComponent
              name="recipient"
              placeholder="Choose recipient"
              value={this.state.message.recipient}
              onChange={this.handleInputChange}
              validate={val => (val ? false : 'recipient is required')}
            />
            {this.state.fieldErrors.recipient}
          </Form.Field>

          <Form.Field required error={!!this.state.fieldErrors.subject}>
            <Input
              name="subject"
              placeholder="Subject"
              value={this.state.message.subject}
              onChange={this.handleInputChange}
              validate={val => (val ? false : 'Subject is required')}
            />
            {this.state.fieldErrors.subject}
          </Form.Field>

          <Form.Field required error={!!this.state.fieldErrors.body}>
            <TextArea
              name="body"
              placeholder="Body"
              value={this.state.message.body}
              onChange={this.handleInputChange}
              validate={val => (val ? false : 'body is required')}
            />
            {this.state.fieldErrors.body}
          </Form.Field>

          <Button type="submit" disabled={this.validate()}>
            <Icon name="send" />
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Composer;

const messagePost = (subject, body, recipient) =>
  axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/sendMessage',
    data: {
      subject,
      body,
      recipient,
      date: new Date()
        .toISOString()
        .substring(0, 19)
        .replace('T', ' '),
    },
    withCredentials: true,
  });
