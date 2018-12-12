
var auth = require('../controllers/authController');

module.exports = function(app){

  app.post('/auth/signup', function(req, res){
    auth.signup(
      req.body.userName,
      req.body.email,
      req.body.password
    ).then((data) => {
      if(!data.idUsers){
        res.status(400).send(data)
      }else{
        req.session.user = data;
        req.session.save();
        res.status(200).send(data)
      }
    });
  });

  app.post('/auth/login', function(req, res){
    auth.login(
      req.body.email,
      req.body.password
    ).then((data) => {
      if(!data.idUsers){
        res.status(400).send(data);
      }else{
        req.session.user = data;
        res.status(200).send(data);
      }
    });
  });


  app.post('/auth/logout', function(req, res){
    req.session.destroy();
    res.status(200).send({});
  });

  app.get('/auth/session', function(req, res){
    if (req.session.user){
      res.status(200).send(req.session.user);
    }else{
      res.status(400).send('not logged in');
    }
  });


  app.get('/getUserInfo', function(req, res){
    auth.getUser(
      req.session.user.idUsers
    ).then(data => res.status(200).send(data))
  });


  app.post('/editUserInfo', function(req, res){
    auth.editUser(
      req.body.email,
      req.body.username,
      req.session.user.idUsers
    ).then(data => res.status(200).send('ok'))
    .catch(err => res.status(300).send('err'));
  })

}
