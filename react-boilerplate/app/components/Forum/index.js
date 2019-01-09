import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import ForumFeed from 'containers/Forum/Feed';
import ThreadsTableContainer from 'containers/Forum/ThreadsTableContainer';
import ThreadComposer from 'containers/Forum/ThreadComposer';
import ThreadContainer from 'containers/Forum/ThreadContainer/ThreadContainer';

const ForumGrid = () => (
  <Grid style={{ margin: 'auto' }} divided stretched columns={2}>
    <Grid.Row>
      <Grid.Column width={13}>
        <Route path="/forum/post" component={ThreadComposer} />
        <Route path="/forum/thread/:id" component={ThreadContainer} />
        <Route exact path="/forum" component={ThreadsTableContainer} />
      </Grid.Column>
      <Grid.Column width={3}>
        <ForumFeed />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ForumGrid;
