import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Container,
  Button,
  Input,
  Form,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

require('./css.css');

const Signup = props => (
  <div>
    <Container style={{ marginTop: '30vh' }} text textAlign="center">
      <Grid verticalAlign="middle" centered columns={3}>
        <Segment className="auth-segment">
          <Form size="tiny" id="signup" name="signup" onSubmit={props.onSubmit}>
            <Form.Field error={props.errors.email}>
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={props.email}
                onChange={props.onInputChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="userName">Username</label>
              <Input
                id="userName"
                name="userName"
                type="text"
                value={props.username}
                onChange={props.onInputChange}
              />
            </Form.Field>
            <Form.Field error={props.errors.password}>
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                name="password"
                type="password"
                value={props.password}
                onChange={props.onInputChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
              />
            </Form.Field>
            <br />
            <Button type="submit" size="mini" disabled={props.disabled}>
              Sign Up{' '}
            </Button>
            <Link to="/auth/login">
              <Button size="mini">Login</Button>
            </Link>
          </Form>
          <br />
        </Segment>
      </Grid>
    </Container>
  </div>
);

Signup.propTypes = {
  email: PropTypes.string,
  onInputChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  errors: PropTypes.object,
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Signup;
