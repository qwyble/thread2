import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from '../../../components/authentication/signup';
import Login from '../../../components/authentication/login';


class LoginContainer extends React.Component {
  state = {
    email: '',
    password: '',
    userName: '',
  }

  reset = () => {
    this.setState({ email: '', password: '', userName: '' });
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSignupSubmit = () => {
    this.props.onAuth(this.state, 'signup');
  }

  handleLoginSubmit = () => {
    this.props.onAuth(this.state, 'login');
  }

  getRedirectUrl = () => {
    const loc = this.props.location.state;
    if (loc) {
      if (loc.from.slice(0, 4) !== 'auth') {
        return loc.from;
      }
    }
    return '/stream';
  }


  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to={this.getRedirectUrl()} />;
    }
    return (
      <div>
        <Switch>
          <Route path="/auth/signup">
            <Signup
              onInputChange={this.handleInputChange}
              email={this.state.email}
              password={this.state.password}
              username={this.state.username}
              onSubmit={this.handleSignupSubmit}
              error={this.props.error}
            />
          </Route>
          <Route path="/auth">
            <Login
              onInputChange={this.handleInputChange}
              password={this.state.password}
              email={this.state.email}
              onSubmit={this.handleLoginSubmit}
              error={this.state.error}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

LoginContainer.propTypes = {
  onAuth: PropTypes.func,
  location: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  error: PropTypes.object,
};


export default LoginContainer;
