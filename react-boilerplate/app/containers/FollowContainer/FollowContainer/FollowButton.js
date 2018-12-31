import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

const FollowButton = props => (
  <div>
    <Button size="mini" onClick={props.follow}>
      <LoaderWrapper isLoading={props.isLoading}>
        {props.isFollowing ? <div>Unfollow</div> : <div>Follow</div>}
      </LoaderWrapper>
    </Button>
  </div>
);

FollowButton.propTypes = {
  isFollowing: PropTypes.bool,
  follow: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default FollowButton;
