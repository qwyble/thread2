import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import ThreadView from '../../../components/Forum/ThreadView/index.js';
import NewComment from './newComment.js';
import CommentList from './commentList.js';

class ThreadViewContainer extends React.Component {
  state = {
    thread: {},
    success: false,
    openComment: false,
    commentSuccess: false,
    _loading: false,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getThread(id);
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id;
    const prevId = prevProps.match.params.id;

    if (id !== prevId) this.getThread(id);
  }

  getThread = id => {
    this.setState({ _loading: true });
    axios({
      method: 'get',
      url: 'https://thread-204819.appspot.com/getThread',
      params: {
        id,
      },
    }).then(result =>
      this.setState({ thread: result.data[0], _loading: false })
    );
  };

  handleDeleteThread = id => {
    axios({
      method: 'post',
      url: 'https://thread-204819.appspot.com/deleteThread',
      data: {
        id,
      },
      withCredentials: true,
    }).then(() => this.setState({ success: true }));
  };

  handleOpenComment = () => {
    if (this.state.openComment) {
      this.setState({ openComment: false });
    } else {
      this.setState({ openComment: true });
    }
  };

  handleCommentSubmit = () => {
    this.setState({ commentSuccess: true, openComment: false }, () => {
      this.setState({ commentSuccess: false });
    });
  };

  render() {
    return (
      <div>
        {this.state.success ? <Redirect to="/forum" /> : <div />}

        <ThreadView
          isOwner={props.user.idUsers === this.state.thread.UserId}
          thread={this.state.thread}
          onOpenComment={this.handleOpenComment}
          onDeleteThread={this.handleDeleteThread}
          _loading={this.state._loading}
        />

        {this.state.openComment ? (
          <NewComment
            onCancelComment={this.handleOpenComment}
            onCommentSubmit={this.handleCommentSubmit}
            threadId={this.state.thread.idThreadPost}
          />
        ) : (
          <div />
        )}

        <CommentList
          threadId={this.state.thread.idThreadPost}
          commentSuccess={this.state.commentSuccess}
        />
      </div>
    );
  }
}

export default ThreadViewContainer;
