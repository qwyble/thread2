var search = require('../controllers/searchController.js');
var follower = require('../controllers/followerController');

module.exports = function(app) {
  app.get('/searchUsersAll/:searchString?', function(req, res) {
    search.getUsers(req.params.searchString).then(users => {
      res.status(200).send(users);
    });
  });

  app.get('/searchPlaylistsAll/:searchString?', function(req, res) {
    search.getPlaylists(req.params.searchString).then(playlists => {
      res.status(200).send(playlists);
    });
  });

  app.get('/searchSongsAll/:searchString?', function(req, res) {
    search.getSongs(req.params.searchString).then(songs => {
      res.status(200).send(songs);
    });
  });

  app.get('/searchUsers/:searchString?', function(req, res) {
    search.getUsersSearchBar(req.params.searchString).then(users => {
      res.status(200).send(users);
    });
  });

  app.get('/searchPlaylists/:searchString?', function(req, res) {
    search.getPlaylistsSearchBar(req.params.searchString).then(playlists => {
      res.status(200).send(playlists);
    });
  });

  app.get('/searchSongs/:searchString?', function(req, res) {
    search.getSongsSearchBar(req.params.searchString).then(songs => {
      res.status(200).send(songs);
    });
  });

  app.get('/emailSearch', function(req, res) {
    follower.getFollowers(req.session.user.idUsers).then(followers => {
      follower
        .getFollowing(req.session.user.idUsers)
        .then(following => ({ ...followers, ...following }));
    });
  });
};
