import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoadableMessagesRouter from 'components/Messages/MessagesRouter/Loadable';
import LoadableProfileContainer from 'containers/Profile/ProfileContainer/Loadable';
import LoadableAudioPlayback from 'containers/Audio/PlaybackContainer/Loadable';
import LoadableSongDetails from 'containers/SongDetails/SongDetailsContainer/Loadable';
import LoadableForumSidebar from 'components/Forum/ForumSidebar/Loadable';
import LoadableFollowers from 'containers/FollowContainer/Followers/Loadable';
import LoadableFollowing from 'containers/FollowContainer/Following/Loadable';
import LoadableExplorer from 'containers/Search/Explorer/Loadable';
import LoadableTopBar from 'components/TopBar/Loadable';

import LoadableProfileContext from 'containers/AppUtilities/ProfileContext/Loadable';

import logo from './logo.svg';

const Root = () => (
  <div>
    <div>
      <div>
        <LoadableTopBar logo={logo} />
      </div>
      <div>
        <Switch>
          <Route path="/stream" component={LoadableProfileContext} />
          <Route
            path="/playlist/:playlist"
            component={LoadableProfileContext}
          />
          <Route path="/explore" component={LoadableExplorer} />
          <Route path="/following" component={LoadableFollowing} />
          <Route path="/followers" component={LoadableFollowers} />
          <Route path="/forum" component={LoadableForumSidebar} />
          <Route path="/profile/:profile" component={LoadableProfileContext} />
          <Route exact path="/edit" component={LoadableProfileContainer} />
          <Route path="/messages" component={LoadableMessagesRouter} />
          <Route path="/song/:song" component={LoadableSongDetails} />
          <Route exact path="/" component={LoadableProfileContext} />
        </Switch>
      </div>
      <div>
        <LoadableAudioPlayback />
      </div>
    </div>
  </div>
);

export default Root;
