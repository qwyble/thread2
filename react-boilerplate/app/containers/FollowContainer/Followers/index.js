import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import Users from 'components/Search/Users';

import HasFollowers from './HasFollowers';

import reducer from './reducer';
import saga from './saga';

import { makeSelectIsLoading, makeSelectFollowers } from './selectors';
import { getFollowers } from './actions';

class Followers extends React.Component {
  componentDidMount() {
    this.props.getFollowers();
  }

  render() {
    return (
      <LoaderWrapper isLoading={this.props.isLoading}>
        <HasFollowers followers={this.props.followers}>
          <Users users={this.props.followers} />
        </HasFollowers>
      </LoaderWrapper>
    );
  }
}

Followers.propTypes = {
  getFollowers: PropTypes.func,
  isLoading: PropTypes.bool,
  followers: PropTypes.object,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    followers: makeSelectFollowers(),
  });

const mapDispatchToProps = {
  getFollowers,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'Followers', reducer });
const withSaga = injectSaga({ key: 'Followers', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Followers);
