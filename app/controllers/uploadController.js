var Promise = require('bluebird');
var GoogleCloudStorage = Promise.promisifyAll(require('@google-cloud/storage'));
const uuidv4 = require('uuid/v4');

const { sequelize, Sequelize } = require('../db/dbConnect.js');
const Song = require('../models/song.js')(sequelize, Sequelize);

var storage = GoogleCloudStorage({
  projectId: 'thread-204819',
  keyFilename: './thread-projectowner.json',
});

var BUCKET_NAME = 'thread_song_bucket';

var myBucket = storage.bucket(BUCKET_NAME);

module.exports = {
  uploadSong: function(req, res) {
    songFileToBucket(req, res);
  },

  deleteSong: function(req) {
    return deleteFile(
      req.body.songId,
      req.session.user.idUsers,
      req.body.fileName
    );
  },
};

//send file to cloud bucket
songFileToBucket = (req, res) => {
  const gcsname = uuidv4() + req.file.originalname;
  file = myBucket.file(gcsname);
  const stream = file.createWriteStream({
    metadata: { contentType: file.mimetype },
    gzip: true,
  });
  stream.on('error', err => {
    res.status(400).end(err);
  });
  stream.on('finish', () => {
    file
      .makePublic()
      .then(() => getPublicUrl(gcsname))
      .then(url => {
        const song = {
          title: req.body.title,
          description: req.body.description,
          genres: req.body.genres,
          owner: req.session.user.idUsers,
          dateUploaded: new Date(),
          URL: url,
          fileName: gcsname,
        };

        Song.create(song);
        res.status(200).end(song);
      });
  });
  stream.end(file.buffer);
};

function getPublicUrl(file_name) {
  console.log(`https://storage.googleapis.com/${BUCKET_NAME}/${file_name}`);
  return `https://storage.googleapis.com/${BUCKET_NAME}/${file_name}`;
}

deleteFile = (songId, user, filename) => {
  await myBucket.file(filename).delete();
  return sequelize.query(
    `DELETE FROM songs
      WHERE idSongs = ? AND owner = ?`,
    {
      replacements: [songId, user],
      type: sequelize.QueryTypes.DELETE,
    }
  );
};
