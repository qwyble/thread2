import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/common/Loader';
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
    this.props.setParamsContext(this.props.match);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url)
      this.props.setParamsContext(this.props.match);
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
