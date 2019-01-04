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

const Signup = props => (
  <div>
    <Container style={{ marginTop: '30vh' }} text textAlign="center">
      <Grid verticalAlign="middle" centered columns={3}>
        <Segment>
          <Form size="tiny" id="signup" name="signup" onSubmit={props.onSubmit}>
            <Form.Field>
              <label>Email Address</label>
              <Input
                name="email"
                type="email"
                value={props.email}
                onChange={props.onInputChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
              />
            </Form.Field>
            <Form.Field>
              <label>Username</label>
              <Input
                name="userName"
                type="text"
                value={props.username}
                onChange={props.onInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Input
                name="password"
                type="password"
                value={props.password}
                onChange={props.onInputChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
              />
            </Form.Field>
            <Button type="submit">Sign Up </Button>
          </Form>
          <div>{props.errors.email}</div>
          <div>{props.errors.password}</div>
          <br />
          <Link to="/auth/login">Login</Link>
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
};

export default Signup;
