import React from 'react';
import PropTypes from 'prop-types';

require('./css.css');

const ProfileViewer = props => (
  <div className="ui segment inline light">
    <div className="image medium">
      <img
        src={props.user.get('imageUrl')}
        className="profile-viewer-image"
        alt="profile"
      />
    </div>

    <div className="ui segment marginless">
      <div className="profile-card">
        <div>{props.user.get('userName')}</div>
        <div>{props.user.get('email')}</div>
      </div>
    </div>
  </div>
);

ProfileViewer.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProfileViewer;
