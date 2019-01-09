import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import { makeSelectThreadIdParam } from 'containers/Forum/ThreadContainer/ThreadContainer/selectors';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';

import { makeSelectIsLoading, makeSelectIsSubscribed } from './selectors';
import { getSubscribed, subscribe } from './actions';

class Subscribe extends React.Component {
  componentDidMount() {
    this.props.getSubscribed();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.threadIdParam !== this.props.threadIdParam)
      this.props.getSubscribed();
  }

  render() {
    return (
      <Button onClick={this.props.subscribe} floated="right">
        <LoaderWrapper isLoading={this.props.isLoading} size="mini">
          {this.props.subscribed ? 'Unsubscribe' : 'Subscribe'}
        </LoaderWrapper>
      </Button>
    );
  }
}

Subscribe.propTypes = {
  subscribe: PropTypes.func,
  getSubscribed: PropTypes.func,
  threadIdParam: PropTypes.number,
  isLoading: PropTypes.bool,
  subscribed: PropTypes.bool,
};

const mapStateToProps = () =>
  createStructuredSelector({
    threadIdParam: makeSelectThreadIdParam(),
    isLoading: makeSelectIsLoading(),
    subscribed: makeSelectIsSubscribed(),
  });

const mapDispatchToProps = {
  subscribe,
  getSubscribed,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'SubscribeContainer', reducer });
const withSaga = injectSaga({ key: 'SubscribeContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Subscribe);
