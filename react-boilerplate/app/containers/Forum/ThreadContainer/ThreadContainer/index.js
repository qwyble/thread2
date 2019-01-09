import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import ModalWrapper from 'components/common/ModalWrapper';
import IsThreadOwner from 'containers/Wrappers/IsThreadOwner';

import Subscribe from 'containers/Forum/ThreadView/ThreadModifiers/Subscribe';
import AddCommentContainer from 'containers/Forum/ThreadView/ThreadModifiers/AddCommentContainer';
import DeleteThread from 'containers/Forum/ThreadView/ThreadModifiers/DeleteThread';

import ThreadView from 'components/Forum/Thread/ThreadView';
import CommentList from 'components/Forum/Thread/CommentList';

import {
  makeSelectThread,
  makeSelectIsLoading,
  makeSelectComments,
  makeSelectThreadIdParam,
} from './selectors';

import { getThread } from './actions';

class ThreadView extends React.Component {
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
            <AddCommentContainer onCloseModal={this.props.onCloseModal} />
          </ModalWrapper>
          <Subscribe />
          <IsThreadOwner>
            <ModalWrapper trigger={deleteTrigger}>
              <DeleteThread onCloseModal={this.props.onCloseModal} />
            </ModalWrapper>
          </IsThreadOwner>
          <CommentList comments={this.props.comments} />
        </LoaderWrapper>
      </div>
    );
  }
}

ThreadView.propTypes = {
  getThread: PropTypes.func,
  comments: PropTypes.array,
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
)(ThreadView);
