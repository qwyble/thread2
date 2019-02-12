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
      <div>
        <Table.Body>
          {' '}
          {this.props.messages.map((m, i) => {
            const style = m.viewed ? { opacity: '.6' } : {};
            return (
              <Table.Row key={i} style={style}>
                {' '}
                <Table.Cell>
                  {' '}
                  <Checkbox
                    className="messageCheckbox"
                    size="mini"
                    id={m.idmessages}
                    checked={!!m.selected}
                    onChange={this.props.onSelectMessage}
                  />{' '}
                  <span />{' '}
                </Table.Cell>{' '}
                <Table.Cell id={m.idmessages} onClick={this.handleViewMessage}>
                  {' '}
                  {m.senderName}{' '}
                </Table.Cell>{' '}
                <Table.Cell id={m.idmessages} onClick={this.handleViewMessage}>
                  {' '}
                  {m.subject}{' '}
                </Table.Cell>{' '}
                <Table.Cell id={m.idmessages} onClick={this.handleViewMessage}>
                  {m.date.slice(0, 10)}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </div>
    );
  }
}

MessagesList.propTypes = {
  onSelectMessage: PropTypes.func,
  messages: PropTypes.object.isRequired,
};

export default MessagesList;
