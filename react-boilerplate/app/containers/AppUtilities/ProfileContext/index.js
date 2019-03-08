import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';

import SideBarContainer from 'components/SideBar';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import {
  makeSelectProfileParam,
  makeSelectIsLoading,
  makeSelectProfile,
} from './selectors';

import { makeSelectUser } from '../UserContainer/selectors';
import { setProfile, getProfile, setParamsContext } from './actions';
import saga from './saga';

class ProfileContext extends React.Component {
  componentDidMount() {
    this.props.setParamsContext(this.props.match);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url)
      this.props.setParamsContext(this.props.match);
  }

  render() {
    if (this.props.user) {
      return (
        <LoaderWrapper isLoading={this.props.isLoading}>
          <SideBarContainer owner={this.props.profile} />
        </LoaderWrapper>
      );
    }
    return <div />;
  }
}

ProfileContext.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  setParamsContext: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  profileParam: makeSelectProfileParam(),
  user: makeSelectUser(),
  profile: makeSelectProfile(),
});

const mapDispatchToProps = {
  getProfile,
  setProfile,
  setParamsContext,
};

const withSaga = injectSaga({ key: 'ProfileContext', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withSaga,
  withConnect
)(ProfileContext);
