import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import ErrorWrapper from 'containers/Wrappers/ErrorWrapper';
import Loader from 'components/common/Loader';
import LoadableProtected from 'components/Authentication/Protected/Loadable';
import LoadableLoginContainer from 'containers/Authentication/LoginContainer/Loadable';
import { makeSelectIsLoggedIn, makeSelectIsLoading } from './selectors';
import { authenticate } from './actions';

import reducer from './reducers';
import saga from './sagas';

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.onAuth({}, 'session');
  }

  handleLogout = () => {
    this.props.onLogout({}, 'logout');
  };

  render() {
    console.log('rendering in UserContainer');
    if (this.props.isLoading) {
      return (
        <div>
          <Loader style={{ marginTop: '30vh' }} active inline="centered" />
          <div>Authenticating . . .</div>
        </div>
      );
    }
    return (
      <BrowserRouter>
        <div>
          <ErrorWrapper />
          <Switch>
            <Route
              path="/auth"
              render={props => (
                <LoadableLoginContainer
                  {...props}
                  isLoggedIn={this.props.isLoggedIn}
                  onAuth={this.props.onAuth}
                />
              )}
            />
            <Route
              path="/"
              render={props => (
                <LoadableProtected
                  {...props}
                  isLoggedIn={this.props.isLoggedIn}
                  onLogout={this.handleLogout}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

UserContainer.propTypes = {
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn(),
  isLoading: makeSelectIsLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAuth: (creds, ext) => dispatch(authenticate(creds, ext)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'UserContainer', reducer });
const withSaga = injectSaga({ key: 'UserContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(UserContainer);
