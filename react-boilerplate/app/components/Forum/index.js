import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import ForumFeed from 'containers/Forum/Feed';
import ThreadsTableContainer from 'containers/Forum/ThreadsTableContainer';
import ThreadComposer from 'containers/Forum/ThreadComposer';
import ThreadContainer from 'containers/Forum/ThreadContainer/ThreadContainer';

require('./css.css');

const ForumGrid = () => (
  <div className="container forum-container">
    <div className="row">
      <div className="col-sm-9">
        <Route path="/forum/post" component={ThreadComposer} />
        <Route path="/forum/thread/:id" component={ThreadContainer} />
        <Route exact path="/forum" component={ThreadsTableContainer} />
      </div>
      <div className="col-sm-3">
        <ForumFeed />
      </div>
    </div>
  </div>
);

export default ForumGrid;
