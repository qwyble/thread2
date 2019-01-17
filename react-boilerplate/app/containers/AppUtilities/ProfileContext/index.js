import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';

import SideBarContainer from 'containers/SideBar/SideBarContainer';

import { makeSelectProfileParam, makeSelectIsLoading } from './selectors';

import { makeSelectUser } from '../UserContainer/selectors';
import { setProfile, getProfile, setParamsContext } from './actions';
import saga from './saga';

class ProfileContext extends React.Component {
  componentDidMount() {
    this.setProfile();
    this.props.setParamsContext(this.props.match);
  }

  componentDidUpdate(prevProps) {
    if (this.props.profileParam !== prevProps.profileParam) this.setProfile();
    if (prevProps.url !== this.props.url) console.log(this.props.match);
    this.props.setParamsContext(this.props.match);
  }

  setProfile() {
    if (this.props.profileParam) this.props.getProfile(this.props.profileParam);
    else this.props.setProfile(this.props.user);
  }

  render() {
    if (this.props.user) {
      if (!this.props.isLoading) {
        return <SideBarContainer />;
      }
    }
    return <Loader active />;
  }
}

ProfileContext.propTypes = {
  isLoading: PropTypes.bool,
  profileParam: PropTypes.number,
  getProfile: PropTypes.func,
  setProfile: PropTypes.func,
  user: PropTypes.object,
  setParamsContext: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  profileParam: makeSelectProfileParam(),
  user: makeSelectUser(),
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
