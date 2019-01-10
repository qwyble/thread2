var profiles = require('../controllers/profilesController');

module.exports = function(app) {
  app.get('/getProfile/:profileId', function(req, res) {
    if (!req.session.user.idUsers) res.status(400).send('please log in first.');
    profiles
      .getUser(req.params.profileId)
      .then(profile => {
        if (!profile) res.status(400).send('user not found');
        res.status(200).send(profile);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });
};
