var profiles = require('../controllers/profiles');

module.exports = function(app) {
    app.get('/getProfile/:profileId', function(req, res) {
        if (!req.session.user.idUsers) res.status(400).end('please log in first.');
        profiles.getUser(req.params.profileId).then((profile) => {
            res.status(200).end(profile);
        }).catch((err) => {
            res.status(400).end(err);
        });
    });
}