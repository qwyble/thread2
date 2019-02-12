import React from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';

import { makeSelectProfileId } from 'containers/AppUtilities/ProfileContext/selectors';
import { compose } from 'redux';
import { connect } from 'react-redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import PathWrapper from 'containers/Wrappers/PathWrapper';
import IsNotPlaylistOwner from 'containers/Wrappers/IsNotPlaylistOwner';

import reducer from './reducer';
import saga from './saga';
import { makeSelectIsLoading, makeSelectIsFollowing } from './selectors';
import { getIsFollowing, followUser } from './actions';

import FollowButton from './FollowButton';

class FollowContainer extends React.Component {
  componentDidMount() {
    this.props.getIsFollowing();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.idOwner !== this.props.idOwner) this.props.getIsFollowing();
  }

  render() {
    return (
      <PathWrapper>
        <IsNotPlaylistOwner>
          <FollowButton
            follow={this.props.followUser}
            isFollowing={this.props.isFollowing}
            isLoading={this.props.isLoading}
          />
        </IsNotPlaylistOwner>
      </PathWrapper>
    );
  }
}

FollowContainer.propTypes = {
  followUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  getIsFollowing: PropTypes.func.isRequired,
  idOwner: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  isFollowing: makeSelectIsFollowing(),
  idOwner: makeSelectProfileId(),
});

const mapDispatchToProps = {
  getIsFollowing,
  followUser,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'FollowContainer', reducer });
const withSaga = injectSaga({ key: 'FollowContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(FollowContainer);
