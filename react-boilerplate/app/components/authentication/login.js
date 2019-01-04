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

const Login = props => (
  <div>
    <Container style={{ marginTop: '30vh' }} text textAlign="center">
      <Grid verticalAlign="middle" centered columns={3}>
        <Segment>
          <Form size="tiny" id="signup" name="signup" onSubmit={props.onSubmit}>
            <Form.Field>
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                name="email"
                type="text"
                value={props.email}
                onChange={props.onInputChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
              />
            </Form.Field>
            <Form.Field>
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
            <Button type="submit">Login </Button>
          </Form>
          <br />
          <div> {props.errors.email} </div>
          <div> {props.errors.password} </div>
          <Link to="/auth/signup"> Signup </Link>
        </Segment>
      </Grid>
    </Container>
  </div>
);

Login.propTypes = {
  email: PropTypes.string,
  onInputChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  password: PropTypes.string,
  errors: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default Login;
