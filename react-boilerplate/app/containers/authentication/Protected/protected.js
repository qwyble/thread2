import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Root from '../../App/Root';
import Logout from './logout';
import { AppProvider } from '../../../appUtilities/context';
import { AppOwnerProvider } from '../../../appUtilities/ownerContext';

// component protects the route to the main app
// if user isn't logged in, they can only access the login screen
const Protected = (props) => {
  if (!props.isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/auth/login',
          state: { from: props.location.pathname },
        }}
      />
    );
  }
  return (
    <Switch>
      <Route
        path="/logout"
        render={props2 => <Logout {...props2} onLogout={props.onLogout} />}
      />
      <Route
        path="/"
        render={() => (
          <AppProvider>
            <Root />
          </AppProvider>
        )}
      />
    </Switch>
  );
};


export default Protected;
