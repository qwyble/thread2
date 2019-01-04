var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var cors = require('cors');
require('multer');
require('uuid/v4');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');
require('dotenv').load();
var helmet = require('helmet');
var compression = require('compression');

// set up express application
app.use(helmet());
app.use(compression());
app.use(morgan('dev')); //log every request to the console
app.use(bodyParser()); //get information from html forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: /.*/,
    methods: ['GET', 'POST'],
    credentials: true, // enable set cookie
  })
);

//set up passport
app.use(session({ secret: 'notaverysecretsecretbutworksanyway' })); //session secret

//if production, serve static bundle

app.use(express.static('react-boilerplate/build'));

//launch
app.listen(port);
console.log('it happens on port ' + port);

//routes
require('./app/routes/auth.js')(app);
require('./app/routes/upload.js')(app);
require('./app/routes/songs.js')(app);
require('./app/routes/playlists.js')(app);
require('./app/routes/search.js')(app);
require('./app/routes/songPlaylist.js')(app);
require('./app/routes/imageUpload.js')(app);
require('./app/routes/follower.js')(app);
require('./app/routes/messages.js')(app);
require('./app/routes/forums.js')(app);
