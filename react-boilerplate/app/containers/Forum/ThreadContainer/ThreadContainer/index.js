import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

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

import reducer from './reducer';
import saga from './saga';

import {
  makeSelectThread,
  makeSelectIsLoading,
  makeSelectComments,
  makeSelectThreadIdParam,
} from './selectors';

import { getThread } from './actions';

class ThreadContainer extends React.Component {
  componentDidMount() {
    this.props.getThread();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.threadIdParam !== this.props.threadIdParam) {
      this.props.getThread();
    }
  }

  render() {
    const commentTrigger = <Button>Comment</Button>;
    const deleteTrigger = <Button>Delete Thread</Button>;

    return (
      <div>
        <LoaderWrapper isLoading={this.props.isLoading}>
          <ThreadView thread={this.props.thread} />
          <ModalWrapper trigger={commentTrigger}>
            <AddCommentContainer />
          </ModalWrapper>
          <Subscribe />
          <IsThreadOwner>
            <ModalWrapper trigger={deleteTrigger}>
              <DeleteThread />
            </ModalWrapper>
          </IsThreadOwner>
          <CommentList comments={this.props.comments} />
        </LoaderWrapper>
      </div>
    );
  }
}

ThreadContainer.propTypes = {
  getThread: PropTypes.func,
  comments: PropTypes.object,
  thread: PropTypes.object,
  isLoading: PropTypes.bool,
  threadIdParam: PropTypes.number,
};

const mapStateToProps = () =>
  createStructuredSelector({
    comments: makeSelectComments(),
    thread: makeSelectThread(),
    isLoading: makeSelectIsLoading(),
    threadIdParam: makeSelectThreadIdParam(),
  });

const mapDispatchToProps = {
  getThread,
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
