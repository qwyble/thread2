import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import SideBar from 'containers/sideBar/SideBar';

import {
  makeSelectProfileParam,
  makeSelectProfileIsLoading,
} from './selectors';

import { makeSelectUser } from '../UserContainer/selectors';
import { setProfile, getProfile } from './actions';
import reducer from './reducer';
import saga from './saga';

// sets the profile being viewed,

class RoutedContext extends React.Component {

  componentDidMount() {
    if (this.props.profileParam) this.props.getProfile(this.props.profileParam);
    else this.props.setProfile(this.props.user);
  }

  componentDidUpdate(prevProps) {
    if (this.props.profileParam !== prevProps.profileParam) {
      if (this.props.profileParam) this.props.getProfile(this.props.profileParam);
      else this.props.setProfile(this.props.user);
    }

  }

  render() {
    if (this.props.user) {
      if (!this.props.profileIsLoading) {
        if (!this.props.profileError) return <SideBar />;
        return (
          <div>
            {this.props.profileError}
          </div>
        );
      }
    }
    return <Loader active />;
  }
}

RoutedContext.propTypes = {
  profileIsLoading: PropTypes.bool,
  profileParam: PropTypes.number,
  profileError: PropTypes.object,
  getProfile: PropTypes.func,
  setProfile: PropTypes.func,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  profileIsLoading: () => makeSelectProfileIsLoading(),
  profileParam: () => makeSelectProfileParam(),
  profileError: () => makeSelectProfileError(),
  user: () => makeSelectUser(),
});

const mapDispatchToProps = {
  getProfile,
  setProfile,
};

const withReducer = injectReducer({ key: 'ProfileContext', reducer });
const withSaga = injectSaga({ key: 'ProfileContext', saga });

const withConnect = connect({
  mapDispatchToProps,
  mapStateToProps,
});

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(RoutedContext);
