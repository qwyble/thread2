import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';

import ErrorWrapper from 'containers/Wrappers/ErrorWrapper';
import Loader from 'components/common/Loader';
import LoadableProtected from 'components/Authentication/Protected/Loadable';
import LoadableLoginContainer from 'containers/Authentication/LoginContainer/Loadable';
import { makeSelectIsLoggedIn, makeSelectIsLoading } from './selectors';
import { authenticate } from './actions';

import saga from './sagas';

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.onAuth({}, 'session');
  }

  handleLogout = () => {
    this.props.onAuth({}, 'logout');
  };

  render() {
    if (this.props.isLoading) {
      return (
        <div>
          <Loader
            message="authenticating"
            style={{ marginTop: '30vh' }}
            active
            inline="centered"
          />
        </div>
      );
    }
    return (
      <BrowserRouter>
        <div className="container-fluid">
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
  isLoading: PropTypes.bool,
  onAuth: PropTypes.func.isRequired,
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

const withSaga = injectSaga({ key: 'UserContainer', saga });

export default compose(
  withSaga,
  withConnect
)(UserContainer);
