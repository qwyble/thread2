var profiles = require('../controllers/profiles');

module.exports = function(app) {
    app.get('/profile/:profile', function(req, res) {
        if (!req.session.user.idUsers) res.status(400).end('please log in first.');
        profiles.getUser(
            req.params.profile,
        )
    })
}