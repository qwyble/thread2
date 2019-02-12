import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

const FollowButton = props => (
  <Button inverted color="blue" onClick={props.follow} className="followButton">
    <LoaderWrapper isLoading={props.isLoading}>
      {props.isFollowing ? <span>Unfollow</span> : <span>Follow</span>}
    </LoaderWrapper>
  </Button>
);

FollowButton.propTypes = {
  isFollowing: PropTypes.bool,
  follow: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default FollowButton;
