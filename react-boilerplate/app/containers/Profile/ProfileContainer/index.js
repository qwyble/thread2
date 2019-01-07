import React from 'react';
import PropTypes from 'prop-types';

import { Container, Segment } from 'semantic-ui-react';
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
  makeSelectIsLoading,
  makeSelectImageIsLoading,
  makeSelectGetUserIsLoading,
} from './selectors';

import { getUser, editUser, uploadImage } from './actions';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        <Container className="songInfoContainer">
          <LoaderWrapper isLoading={this.props.getUserIsLoading}>
            <Segment>
              <ProfileViewer user={this.props.user} />
            </Segment>
            <ProfileEditor
              user={this.props.user}
              onSubmit={this.props.editUser}
              editIsLoading={this.props.editIsLoading}
              imageIsLoading={this.props.imageIsLoading}
              onUploadImage={this.props.uploadImage}
            />
          </LoaderWrapper>
        </Container>
      </div>
    );
  }
}

ProfileContainer.propTypes = {
  getUser: PropTypes.func,
  user: PropTypes.object,
  editIsLoading: PropTypes.bool,
  editUser: PropTypes.func,
  uploadImage: PropTypes.func,
  imageIsLoading: PropTypes.bool,
  getUserIsLoading: PropTypes.bool,
};

const mapStateToProps = () =>
  createStructuredSelector({
    user: makeSelectUser(),
    isLoading: makeSelectIsLoading(),
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
const withSaga = injectSaga({ key: 'profileContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ProfileContainer);
