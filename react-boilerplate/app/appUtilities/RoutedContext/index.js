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
  makeSelectProfile,
  makeSelectIsOwner,
  makeSelectCategories,
  makeSelectProfileParam,
  makeSelectCatsIsLoading,
  makeSelectProfileIsLoading,
} from './selectors';

import { makeSelectUser } from '../UserContainer/selectors';
import { getCategories, getProfile } from './actions';
import reducer from './reducer';
import saga from './saga';

// sets the profile being viewed,
// fetches categories to display
// based on profile.

class RoutedContext extends React.Component {

  componentDidMount() {
    if (this.props.profileParam) this.props.getProfile(this.props.profileParam)
    else this.props.getCategories(this.props.profile.get('idUsers'));
  }

  render() {
    if (this.props.user) {
      if (!this.props.profileIsLoading) {
        if (!this.props.profileError) {
          return (
            <SideBar
              _loading={this.props.catsIsLoading}
              categories={this.props.categories}
              getCats={this.props.getCategories}
              profile={this.props.profile}
              isOwner={this.props.isOwner}
              owner={this.props.profile}
            />
          );
        }
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
  profileError: PropTypes.object,
  getCategories: PropTypes.func,
  catsIsLoading: PropTypes.bool,
  categories: PropTypes.object,
  getProfile: PropTypes.func,
  profile: PropTypes.object,
  param: PropTypes.number,
  isOwner: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  profileIsLoading: () => makeSelectProfileIsLoading(),
  catsIsLoading: () => makeSelectCatsIsLoading(),
  profileParam: () => makeSelectProfileParam(),
  profileError: () => makeSelectProfileError(),
  categories: () => makeSelectCategories(),
  profile: () => makeSelectProfile(),
  isOwner: () => makeSelectIsOwner(),
  user: () => makeSelectUser(),
});

const mapDispatchToProps = {
  getCategories,
  getProfile,
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
