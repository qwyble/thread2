import React from 'react';
import { Segment, Loader, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import MessagesUtil from '../../../components/Messages/SideBar';
import MessagesList from '../messagesList';
import SentMessagesList from '../../../components/Messages/MessageList/sentMessagesList';
import ViewMessage from '../../../components/Messages/MessageView/Index';
import Composer from '../composer';

class MessagesContainer extends React.Component {
  state = {
    selectedMessages: [],
    messages: [],
    _loading: false,
  };

  componentDidMount = () => {
    this.getMessages();
  };

  getMessages = () => {
    this.setState({ _loading: true });
    messagesGet().then(result => {
      this.setState({ messages: result.data, _loading: false });
    });
  };

  getSentMessages = () => {
    this.setState({ _loading: true });
    sentMessagesGet().then(result =>
      this.setState({ _loading: false, messages: result.data })
    );
  };

  handleMessageSelect = e => {
    const id = parseInt(e.target.id, 10);
    const selected = this.state.selectedMessages;

    if (selected.includes(id)) {
      this.setState({ selectedMessages: selected.filter(m => m !== id) });
    } else {
      this.setState({ selectedMessages: selected.concat(id) });
    }
  };

  handleDelete = () => {
    deletePost(this.state.selectedMessages).then(() => {
      this.getMessages();
    });
  };

  render() {
    return (
      <div>
        <MessagesList messages={this.props.messages} sent={this.props.sent} />
      </div>
    );
  }
}

export default MessagesContainer;

const messagesGet = () =>
  axios({
    method: 'get',
    url: 'https://thread-204819.appspot.com/getMessages',
    withCredentials: true,
  });

const sentMessagesGet = () =>
  axios({
    method: 'get',
    url: 'https://thread-204819.appspot.com/getSentMessages',
    withCredentials: true,
  });

const deletePost = selectedMessages =>
  axios({
    method: 'post',
    url: 'https://thread-204819.appspot.com/deleteMessages',
    data: {
      messages: selectedMessages,
    },
    withCredentials: true,
  });
