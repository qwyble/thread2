import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import ForumCategories from 'containers/Forum/ForumCategories';
import ForumFeed from 'containers/Forum/Feed';
import ThreadsTableContainer from 'containers/Forum/ThreadsTableContainer';
import ThreadComposer from 'containers/Forum/ThreadComposer';
import ThreadContainer from 'containers/Forum/ThreadContainer/ThreadContainer';

require('./css.css');

const ForumGrid = () => (
  <div className="container forum-container">
    <div className="row">
      <div className="col-sm-2">
        <ForumCategories />
      </div>
      <div className="col-sm-8">
        <Switch>
          <Route path="/forum/post" component={ThreadComposer} />
          <Route path="/forum/thread/:id" component={ThreadContainer} />
          <Route exact path="/forum" component={ThreadsTableContainer} />
        </Switch>
      </div>
      <div className="col-sm-2">
        <Link to="/forum/post">
          <button type="button" className="ui button post-thread-button">
            Post Thread
          </button>
        </Link>
        <ForumFeed />
      </div>
    </div>
  </div>
);

export default ForumGrid;
