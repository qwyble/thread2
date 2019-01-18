var playlist = require('../controllers/playlistController.js');

module.exports = function(app) {
  app.post('/addCategory', function(req, res) {
    playlist
      .addCategory(req.body.category, req.session.user.idUsers)
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });

  app.post('/deleteCategory', function(req, res) {
    playlist
      .deleteCategory(req.body.catid, req.session.user.idUsers)
      .then(result => {
        res.status(200).send('ok');
      });
  });

  app.post('/addPlaylist', function(req, res) {
    playlist
      .addPlaylist(req.body.catid, req.body.playlist, req.session.user.idUsers)
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });

  app.post('/deletePlaylist', function(req, res) {
    playlist
      .deletePlaylist(req.body.plid, req.body.catid, req.session.user.idUsers)
      .then(() => res.status(200).send('ok'));
  });

  app.post('/renamePlaylist', function(req, res) {
    playlist
      .renamePlaylist(req.body.plid, req.body.plname, req.session.user.idUsers)
      .then(() => res.status(200).send('success'))
      .catch(err => {
        res.status(400).send(err);
      });
  });

  app.get('/getPlaylists/:profile/:plidParam', function(req, res) {
    playlist
      .getCats(req.session.user.idUsers, req.query.profile)
      .then(data => {
        var playlist;
        const catpls = data;
        const categories2 = Object.values(
          catpls.reduce((cats, { catname, catid, plname, plid, isPublic }) => {
            if (!(catid in cats)) {
              cats[catid] = { catname, catid, pls: [] };
            }
            if (plid) {
              cats[catid].pls.push({ plname, plid, isPublic });
              if (req.plidParam !== 0)
                if ((plid = req.query.plidParam))
                  playlist = { plname, plid, isPublic };
            }
            return cats;
          }, {})
        );
        res.status(200).send({ categories2, playlist });
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });

  app.post('/renameCat', function(req, res) {
    playlist
      .renameCategory(req.body.catid, req.body.name, req.session.user.idUsers)
      .then(result => {
        res.status(200).send('ok');
      })
      .catch(err => {
        res.status(300).send({ err: 'category name must be unique' });
      });
  });

  app.post('/makePublic', function(req, res) {
    playlist.makePublic(req.body.plid).then(result => {
      res.status(200).send('looking good.');
    });
  });

  app.post('/makePrivate', function(req, res) {
    playlist.makePrivate(req.body.plid).then(result => {
      res.status(200).send('looking good.');
    });
  });

  app.post('/clonePlaylist', function(req, res) {
    var songsList = [];
    playlist.getSongsForClone(req.body.plToClone).then(result => {
      songsList = result;
      playlist
        .addPlaylist(req.body.selectedCat, req.body.plname)
        .then(result => {
          var plid = result[0];
          playlist.clonePlaylist(songsList, plid);
          res.status(200).send(result);
        });
    });
  });

  app.get('/getCatsOnly', function(req, res) {
    playlist.getCatsOnly(req.session.user.idUsers).then(result => {
      res.status(200).send(result);
    });
  });
};
