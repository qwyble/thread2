import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import ForumFeed from 'containers/Forum/ForumFeed';
import ThreadContainer from 'containers/Forum/ThreadContainer.js';
import ThreadComposer from 'containers/Forum/ThreadComposer.js';
import ThreadViewContainer from '/containers/Forum/ThreadViewContainer.js';

const ForumGrid = () => (
  <Grid style={{ margin: 'auto' }} divided stretched columns={2}>
    <Grid.Row>
      <Grid.Column width={13}>
        <Route path="/forum/post" component={ThreadComposer} />
        <Route path="/forum/thread/:id" component={ThreadViewContainer} />
        <Route exact path="/forum" component={ThreadContainer} />
      </Grid.Column>
      <Grid.Column width={3}>
        <ForumFeed />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ForumGrid;
