import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';

import Signup from 'components/authentication/signup';
import Login from 'components/authentication/login';

class LoginContainer extends React.Component {
  state = {
    email: '',
    password: '',
    userName: '',
    errors: {
      password: '',
      email: '',
    },
    disabled: true,
  };

  reset = () => {
    this.setState({ email: '', password: '', userName: '' });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => this.validate());
  };

  validate = () => {
    let disabled = false;
    if (!this.state.email) disabled = true;
    else if (!isEmail(this.state.email)) disabled = true;
    else if (!this.state.password) disabled = true;
    this.setState({ disabled });
  };

  handleFocus = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      errors: { ...prevState.errors, [name]: '' },
    }));
  };

  handleBlur = e => {
    if (e.target.name === 'email') {
      if (!this.state.email)
        this.setState(prevState => ({
          errors: { ...prevState.errors, email: 'email is required' },
        }));
      else if (!isEmail(this.state.email))
        this.setState(prevState => ({
          errors: { ...prevState.errors, email: 'invalid email' },
        }));
      else
        this.setState(prevState => ({
          errors: { ...prevState.errors, email: '' },
        }));
    } else if (e.target.name === 'password') {
      if (!this.state.password)
        this.setState(prevState => ({
          errors: { ...prevState.errors, password: 'password is required' },
        }));
      else
        this.setState(prevState => ({
          errors: { ...prevState.errors, password: '' },
        }));
    }
  };

  handleSignupSubmit = e => {
    e.preventDefault();
    this.props.onAuth(this.state, 'signup');
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    this.props.onAuth(this.state, 'login');
  };

  getRedirectUrl = () => {
    const loc = this.props.location.state;
    if (loc) {
      if (loc.from.slice(0, 4) !== 'auth') {
        return loc.from;
      }
    }
    return '/stream';
  };

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
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              errors={this.state.errors}
            />
          </Route>
          <Route path="/auth">
            <Login
              onInputChange={this.handleInputChange}
              password={this.state.password}
              email={this.state.email}
              onSubmit={this.handleLoginSubmit}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              errors={this.state.errors}
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
};

export default LoginContainer;
