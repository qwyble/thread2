import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  makeSelectUser,
  makeSelectIsLoggedIn,
  makeSelectIsLoading,
  makeSelectErrorMsg,
} from './selectors';
import { authenticate } from './actions';

import reducer from './reducers';
import saga from './sagas';

import Loader from '../../components/common/Loader';
import LoadableProtected from '../../containers/authentication/Protected/Loadable';
import LoadableLoginContainer from '../../containers/authentication/LoginContainer/Loadable';


class UserContainer extends React.Component {
  componentDidMount() {
    this.props.onAuth({}, 'session');
  }

  handleLogout = () => {
    this.props.onLogout({}, 'logout');
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div>
          <Loader style={{ marginTop: '30vh' }} active inline="centered" />
          <div>
            Authenticating . . .
          </div>
        </div>
      );
    }
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/auth"
              render={props => (
                <LoadableLoginContainer
                  {...props}
                  isLoggedIn={this.props.isLoggedIn}
                  onLogin={this.props.onLogin}
                  errorMsg={this.props.errorMsg}
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
                  user={this.props.user}
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
  user: PropTypes.object,
  isLoggedIn: PropTypes.bool,
};


const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  isLoggedIn: makeSelectIsLoggedIn(),
  isLoading: makeSelectIsLoading(),
  errorMsg: makeSelectErrorMsg(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onAuth: (creds, ext) => dispatch(authenticate(creds, ext)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'UserContainer', reducer });
const withSaga = injectSaga({ key: 'UserContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserContainer);
