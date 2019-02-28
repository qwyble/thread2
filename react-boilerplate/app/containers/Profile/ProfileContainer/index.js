import React from 'react';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import ProfileEditor from 'components/Profile/ProfileEditor';
import ProfileViewer from 'components/Profile/ProfileViewer';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import reducer from './reducer';
import saga from './saga';

import {
  makeSelectUser,
  makeSelectEditIsLoading,
  makeSelectImageIsLoading,
  makeSelectGetUserIsLoading,
} from './selectors';

import { getUser, editUser, uploadImage } from './actions';

require('./css.css');

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <LoaderWrapper isLoading={this.props.getUserIsLoading}>
        <div className="container">
          <div className="ui segment center profile-segment inline padded">
            <ProfileViewer user={this.props.user} />
            <ProfileEditor
              imageUrl={this.props.user.get('imageUrl')}
              onSubmit={this.props.editUser}
              editIsLoading={this.props.editIsLoading}
              imageIsLoading={this.props.imageIsLoading}
              onImageUpload={this.props.uploadImage}
            />
          </div>
        </div>
      </LoaderWrapper>
    );
  }
}

ProfileContainer.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  editIsLoading: PropTypes.bool,
  editUser: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  imageIsLoading: PropTypes.bool,
  getUserIsLoading: PropTypes.bool,
};

const mapStateToProps = () =>
  createStructuredSelector({
    user: makeSelectUser(),
    editIsLoading: makeSelectEditIsLoading(),
    imageIsLoading: makeSelectImageIsLoading(),
    getUserIsLoading: makeSelectGetUserIsLoading(),
  });

const mapDispatchToProps = {
  getUser,
  editUser,
  uploadImage,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'ProfileContainer', reducer });
const withSaga = injectSaga({ key: 'ProfileContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ProfileContainer);
