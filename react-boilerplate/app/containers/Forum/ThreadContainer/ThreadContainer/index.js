import React from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import ModalWrapper from 'components/common/ModalWrapper';
import IsThreadOwner from 'containers/Wrappers/IsThreadOwner';

import Subscribe from 'containers/Forum/ThreadContainer/ThreadModifiers/Subscribe';
import AddCommentContainer from 'containers/Forum/ThreadContainer/ThreadModifiers/AddComment';
import DeleteThread from 'containers/Forum/ThreadContainer/ThreadModifiers/DeleteThread';

import ThreadView from 'components/Forum/Thread/ThreadView';
import CommentList from 'components/Forum/Thread/CommentList';
import PropChecker from 'components/common/Conditional/PropChecker';

import reducer from './reducer';
import saga from './saga';

import {
  makeSelectThread,
  makeSelectIsLoading,
  makeSelectComments,
  makeSelectCommentsLoading,
} from './selectors';

import { getThread, getComments } from './actions';

class ThreadContainer extends React.Component {
  componentDidMount() {
    this.props.getThread(this.props.match.params.id);
    this.props.getComments(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.getThread(this.props.match.params.id);
      this.props.getComments(this.props.match.params.id);
    }
  }

  renderCommentContainer = toggleOpen => (
    <AddCommentContainer onClose={toggleOpen} />
  );

  render() {
    return (
      <div>
        <LoaderWrapper isLoading={this.props.isLoading}>
          <PropChecker field={this.props.thread}>
            <ThreadView thread={this.props.thread} />
            <ModalWrapper
              trigger={commentTrigger}
              render={this.renderCommentContainer}
            />
            <Subscribe />
            <IsThreadOwner>
              <ModalWrapper trigger={deleteTrigger}>
                <DeleteThread />
              </ModalWrapper>
            </IsThreadOwner>
          </PropChecker>
        </LoaderWrapper>
        <LoaderWrapper isLoading={this.props.commentsLoading}>
          <PropChecker field={this.props.thread}>
            <CommentList comments={this.props.comments} />
          </PropChecker>
        </LoaderWrapper>
      </div>
    );
  }
}

ThreadContainer.propTypes = {
  getThread: PropTypes.func.isRequired,
  comments: PropTypes.object.isRequired,
  thread: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  commentsLoading: PropTypes.bool.isRequired,
  getComments: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  comments: makeSelectComments(),
  thread: makeSelectThread(),
  isLoading: makeSelectIsLoading(),
  commentsLoading: makeSelectCommentsLoading(),
});

const mapDispatchToProps = {
  getThread,
  getComments,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'ThreadContainer', reducer });
const withSaga = injectSaga({ key: 'ThreadContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ThreadContainer);

const commentTrigger = (
  <button type="button" className="ui button">
    Comment
  </button>
);

const deleteTrigger = (
  <button type="button" className="ui button">
    Delete Thread
  </button>
);
