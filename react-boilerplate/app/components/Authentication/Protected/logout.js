import React from 'react';
import PropTypes from 'prop-types';

import { Container, Grid, Segment, Button } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

const Logout = props => {
  if (!props.isLoggedIn) {
    return <Redirect to="auth/login" />;
  }
  return (
    <div>
      <Container style={{ marginTop: '30vh' }} text textAlign="center">
        <Grid verticalAlign="middle" centered columns={3}>
          <Segment>
            Are you sure you want to logout?
            <div>
              <Button onClick={props.onLogout}>yes</Button>
              <Link to="/">
                <Button>no</Button>
              </Link>
            </div>
          </Segment>
        </Grid>
      </Container>
    </div>
  );
};

Logout.propTypes = {
  onLogout: PropTypes.func,
};

export default Logout;
