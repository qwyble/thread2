import React from 'react';
import PropTypes from 'prop-types';

import { Feed } from 'semantic-ui-react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import Event from 'components/Forum/Feed/Event';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import reducer from './reducer';
import saga from './saga';

import { makeSelectIsLoading, makeSelectFeedEvents } from './selectors';
import { getFeed } from './actions';

class ForumFeed extends React.Component {
  componentDidMount() {
    this.props.getFeed();
  }

  render() {
    return (
      <Feed>
        <LoaderWrapper isLoading={this.props.isLoading}>
          {this.props.feedEvents.map((evt, i) => (
            <Event
              key={i}
              body={evt.get('body')}
              user={evt.get('userName')}
              subject={evt.get('subject')}
              threadId={evt.get('idThreadPost')}
            />
          ))}
        </LoaderWrapper>
      </Feed>
    );
  }
}

ForumFeed.propTypes = {
  feedEvents: PropTypes.array,
  isLoading: PropTypes.bool,
  getFeed: PropTypes.func,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    feedEvents: makeSelectFeedEvents(),
  });

const mapDispatchToProps = {
  getFeed,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'ForumFeedContainer', reducer });
const withSaga = injectSaga({ key: 'ForumFeedContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ForumFeed);
