import React from 'react';
import { Segment, Loader, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import MessagesUtil from '../../../components/Messages/SideBar';
import MessagesList from '../messagesList';
import SentMessagesList from '../../../components/Messages/MessageList/sentMessagesList';
import ViewMessage from '../../../components/Messages/MessageView/index';
import Composer from '../composer';

class MessagesContainer extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <MessagesList messages={this.props.messages} />
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
