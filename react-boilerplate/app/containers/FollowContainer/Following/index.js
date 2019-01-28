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

import HasFollowing from './HasFollowing';

import reducer from './reducer';
import saga from './saga';

import { makeSelectIsLoading, makeSelectFollowing } from './selectors';
import { getFollowing } from './actions';

class Following extends React.Component {
  componentDidMount() {
    this.props.getFollowing();
  }

  render() {
    return (
      <div>
        <Grid container columns={4}>
          <LoaderWrapper isLoading={this.props.isLoading}>
            <HasFollowing following={this.props.following}>
              <Users users={this.props.following} />
            </HasFollowing>
          </LoaderWrapper>
        </Grid>
      </div>
    );
  }
}

Following.propTypes = {
  getFollowing: PropTypes.func,
  isLoading: PropTypes.bool,
  following: PropTypes.object,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: makeSelectIsLoading(),
    following: makeSelectFollowing(),
  });

const mapDispatchToProps = {
  getFollowing,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'Following', reducer });
const withSaga = injectSaga({ key: 'Following', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Following);
