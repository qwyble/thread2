import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoadableMessagesContainer from 'containers/messages/MessagesContainer/Loadable';
import LoadableProfileContainer from 'containers/profiles/ProfileContainer/Loadable';
import LoadableAudioPlayback from 'containers/audioPlayback/AudioPlayback/Loadable';
import LoadableSongDetails from 'containers/songRenderers/SongDetails/Loadable';
import LoadableForumSidebar from 'containers/forum/ForumSidebar/Loadable';
import LoadableFollowers from 'containers/follower/Followers/Loadable';
import LoadableFollowing from 'containers/follower/Following/Loadable';
import LoadableExplorer from 'containers/search/Explorer/Loadable';
import LoadableTopBar from 'containers/topBar/Loadable';

import LoadableRoutedContext from '../../appUtilities/RoutedContext/Loadable';

import logo from './logo.svg';

const Root = () => (
  <div>
    <div>
      <div><LoadableTopBar logo={logo} /></div>
      <div>
        <Switch>
          <Route path="/playlist/:playlist" component={LoadableRoutedContext} />
          <Route path="/profile/:profile" component={LoadingRoutedContext} />
          <Route exact path="/edit" component={LoadableProfileContainer} />
          <Route path="/messages" component={LoadableMessagesContainer} />
          <Route path="/song/:song" component={LoadableSongDetails} />
          <Route path="/stream" component={LoadableRoutedContext} />
          <Route path="/followers" component={LoadableFollowers} />
          <Route path="/following" component={LoadableFollowing} />
          <Route path="/forum" component={LoadableForumSidebar} />
          <Route path="/explore" component={LoadableExplorer} />
          <Route path="/" component={LoadableRoutedContext} />
        </Switch>
      </div>
      <div><LoadableAudioPlayback /></div>
    </div>
  </div>
);

export default Root;
