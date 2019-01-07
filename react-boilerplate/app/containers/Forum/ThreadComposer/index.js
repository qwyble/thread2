import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Container, Dimmer, Form, Loader, Button } from 'semantic-ui-react';
import FieldComponent from '../../../components/Forum/ThreadComposer/fieldComponent.js';
import TextComponent from '../../../components/Forum/ThreadComposer/textComponent.js';
import CategoryDropdownComponent from './categoryDropdownComponent';

class ThreadComposer extends React.Component {
  state = {
    thread: {
      category: null,
      subject: '',
      body: '',
    },
    fieldErrors: {
      category: '',
      subject: '',
      body: '',
    },
    _loading: false,
    success: false,
  };

  handleInputChange = ({ name, value, error }) => {
    const thread = { ...this.state.thread };
    const fieldErrors = { ...this.state.fieldErrors };

    thread[name] = value;
    fieldErrors[name] = error;

    this.setState({ thread, fieldErrors });
  };

  validate = () => {
    const thread = { ...this.state.thread };
    const fieldErrors = { ...this.state.fieldErrors };
    const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

    if (!thread.category) return true;
    if (!thread.subject) return true;
    if (!thread.body) return true;
    if (errMessages.length) return true;

    return false;
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.validate()) return;

    this.sendThreadToDb();
  };

  sendThreadToDb = () => {
    this.setState({ _loading: true });

    threadPost(
      this.state.thread.subject,
      this.state.thread.body,
      this.state.thread.category,
      new Date()
    ).then(() => {
      this.setState({
        _loading: false,
        success: true,
        thread: {
          category: null,
          subject: '',
          body: '',
        },
      });
    });
  };

  render() {
    if (this.state.success) return <Redirect to="/forum" />;

    return (
      <Container>
        {this.state._loading ? (
          <Dimmer inverted active>
            <Loader active />
          </Dimmer>
        ) : (
          <div />
        )}

        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field required error={!!this.state.fieldErrors.recipient}>
            <CategoryDropdownComponent
              name="category"
              placeholder="Choose thread category"
              value={this.state.thread.category}
              onChange={this.handleInputChange}
              validate={val => (val ? false : 'category is required')}
            />
            {this.state.fieldErrors.category}
          </Form.Field>

          <Form.Field required error={!!this.state.fieldErrors.subject}>
            <FieldComponent
              name="subject"
              placeholder="Subject"
              value={this.state.thread.subject}
              onChange={this.handleInputChange}
              validate={val => (val ? false : 'Subject is required')}
            />
            {this.state.fieldErrors.subject}
          </Form.Field>

          <Form.Field required error={!!this.state.fieldErrors.body}>
            <TextComponent
              name="body"
              placeholder="Body"
              value={this.state.thread.body}
              onChange={this.handleInputChange}
              validate={val => (val ? false : 'body is required')}
            />
            {this.state.fieldErrors.body}
          </Form.Field>

          <Button type="submit" disabled={this.validate()}>
            Post
          </Button>
        </Form>
      </Container>
    );
  }
}

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
