import React from 'react';
import {
  Container, Grid, Segment, Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Logout = props => (
  <div>
    <Container style={{ marginTop: '30vh' }} text textAlign="center">
      <Grid verticalAlign="middle" centered columns={3}>
        <Segment>
          Are you sure you want to logout?
          <Button onClick={props.onLogout}>yes</Button>
          <Link to="/"><Button>no</Button></Link>
        </Segment>
      </Grid>
    </Container>
  </div>
);

export default Logout;
