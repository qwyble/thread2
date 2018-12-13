import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import FetchCategories from 'containers/sideBar/fetchCategories';

import {
  makeSelectProfile,
  makeSelectIsOwner,
  makeSelectIsLoading,
  makeSelectCategories,
} from './selectors';

import { makeSelectUser } from '../UserContainer/selectors';
import { getCategories } from './actions';
import reducer from './reducer';
import saga from './saga';


// when the component mounts or updates,
// if the profile being viewed has changed,
// tell fetchCategories. FetchCategoies will
// then use profile to render categories and set
// owner based on categories rendered
class RoutedContext extends React.Component {

  componentDidMount() {
    this.props.getCategories(this.props.profile);
  }

  render() {
    if (this.props.user) {
      return (
        <FetchCategories
          user={this.props.user}
          profile={this.props.profile}
          isOwner={this.props.isOwner}
        />
      );
    }
    return <Loader active />;
  }
}

RoutedContext.propTypes = {
  getCategories: PropTypes.func,
  categories: PropTypes.object,
  profile: PropTypes.number,
  isOwner: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  categories: () => makeSelectCategories(),
  isLoading: () => makeSelectIsLoading(),
  profile: () => makeSelectProfile(),
  isOwner: () => makeSelectIsOwner(),
  user: () => makeSelectUser(),
});

const mapDispatchToProps = {
  getCategories,
};

const withReducer = injectReducer({ key: 'ProfileContext', reducer });
const withSaga = injectSaga({ key: 'ProfileContext', saga });

const withConnect = connect({
  mapStateToProps,
  mapDispatchToProps,
});

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(RoutedContext);
