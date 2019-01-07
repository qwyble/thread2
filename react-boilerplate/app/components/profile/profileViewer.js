import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Image } from 'semantic-ui-react';

const ProfileViewer = props => (
  <div>
    <Container>
      <Grid padded relaxed columns={2}>
        <Grid.Row centered>
          <Grid.Column textAlign="center" width={5}>
            <Image src={props.user.imageUrl} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>{props.user.userName}</Grid.Column>
          <Grid.Column width={8}>{props.user.email}</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

ProfileViewer.propTypes = {
  user: PropTypes.object,
};

export default ProfileViewer;
