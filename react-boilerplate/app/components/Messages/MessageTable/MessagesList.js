import React from 'react';
import PropTypes from 'prop-types';

import { Table, Checkbox } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

class MessagesList extends React.Component {
  state = {
    messageToView: '',
    redirect: false,
  };

  handleViewMessage = e => {
    this.setState({ redirect: true, messageToView: e.target.id });
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `/messages/view`,
            state: { id: this.state.messageToView },
          }}
        />
      );
    }

    return (
      <Table.Body>
        {this.props.messages.map(m => (
          <Table.Row
            key={m.get('idmessages')}
            style={m.get('viewed') && { opacity: '.6' }}
          >
            <Table.Cell>
              <Checkbox
                className="messageCheckbox"
                size="mini"
                id={m.get('idmessages')}
                checked={!!m.get('selected')}
                onChange={this.props.onSelectMessage}
              />
              <span />
            </Table.Cell>
            <Table.Cell
              id={m.get('idmessages')}
              onClick={this.handleViewMessage}
            >
              {m.get('senderName')}
            </Table.Cell>
            <Table.Cell
              id={m.get('idmessages')}
              onClick={this.handleViewMessage}
            >
              {m.get('subject')}
            </Table.Cell>
            <Table.Cell
              id={m.get('idmessages')}
              onClick={this.handleViewMessage}
            >
              {m.get('date').slice(0, 10)}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    );
  }
}

MessagesList.propTypes = {
  onSelectMessage: PropTypes.func,
  messages: PropTypes.object.isRequired,
};

export default MessagesList;
