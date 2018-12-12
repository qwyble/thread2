import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Loader } from 'semantic-ui-react';

import logo from './logo.svg';

const LoadingMessagesContainer = Loadable({
  loader: () => import('../messages/messagesContainer'),
  loading: Loader,
});

const LoadingFollowers = Loadable({
  loader: () => import('../follower/followers'),
  loading: Loader,
});

const LoadingFollowing = Loadable({
  loader: () => import('../follower/following'),
  loading: Loader,
});

const LoadingProfileContainer = Loadable({
  loader: () => import('../profiles/profileContainer'),
  loading: Loader,
});

const LoadingAudioPlayback = Loadable({
  loader: () => import('../audioPlayback/audioPlayback'),
  loading: Loader,
});

const LoadingSongDetails = Loadable({
  loader: () => import('../songRenderers/songDetails'),
  loading: Loader,
});

const LoadingRoutedContext = Loadable({
  loader: () => import('../../appUtilities/routedContext'),
  loading: Loader,
});

const LoadingExplorer = Loadable({
  loader: () => import('../search/explorer'),
  loading: Loader,
});


const LoadingForumSidebarLeftOverlay = Loadable({
  loader: () => import('../forum/forumSideBar'),
  loading: Loader,
});

const LoadingSidebarTopOverlay = Loadable({
  loader: () => import('../topBar/topBar'),
  loading: Loader,
  render(loaded, props) {
    const Component = loaded.default;
    return <Component {...props} />;
  },
});

/* App controls state for individual songs
and for the list of songs to be rendered.
it also renders the two main components: topBar and sideBar. */
const Root = () => (
  <div>
    <div>
      <div>
        <LoadingSidebarTopOverlay logo={logo} />
      </div>

      <div>
        <Switch>
          <Route path="/messages" component={LoadingMessagesContainer} />
          <Route path="/followers" component={LoadingFollowers} />
          <Route path="/following" component={LoadingFollowing} />
          <Route path="/forum" component={LoadingForumSidebarLeftOverlay} />
          <Route path="/explore" component={LoadingExplorer} />
          <Route path="/stream" component={LoadingRoutedContext} />
          <Route path="/playlist/:playlist" component={LoadingRoutedContext} />
          <Route exact path="/edit" component={LoadingProfileContainer} />
          <Route path="/profile/:profile" component={LoadingRoutedContext} />
          <Route path="/song/:song" component={LoadingSongDetails} />
          <Route path="/" component={LoadingRoutedContext} />
        </Switch>
      </div>

      <div>
        <LoadingAudioPlayback />
      </div>
    </div>
  </div>
);

export default Root;
