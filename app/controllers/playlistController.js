const { sequelize, Sequelize } = require('../db/dbConnect.js');
const User = require('../models/user.js')(sequelize, Sequelize);

module.exports = {
  addCategory: function(category, owner) {
    return sequelize.query(
      `INSERT INTO categories (name, owner, isPublic) VALUES (?, ?, 0);
        SELECT * FROM categories WHERE idcategories = LAST_INSERT_ID();`,
      {
        replacements: [category, owner],
        type: sequelize.QueryTypes.INSERT,
      }
    );
  },

  deleteCategory: function(catid, owner) {
    return sequelize.query(
      `DELETE FROM categories
        WHERE categories.idcategories = ? AND categories.owner=?;`,
      {
        replacements: [catid, owner],
        type: sequelize.QueryTypes.DELETE,
      }
    );
  },

  renameCategory: function(catid, name, owner) {
    return sequelize.query(
      `UPDATE categories
        SET name = ?
        WHERE idcategories = ? AND owner=?;`,
      {
        replacements: [name, catid, owner],
        type: sequelize.QueryTypes.UPDATE,
      }
    );
  },

  addPlaylist: function(catid, playlist, owner) {
    return sequelize.query(
      `INSERT INTO playlists (name, category) VALUES (?, ?);
        SELECT * FROM playlists WHERE idplaylists = LAST_INSERT_ID();`,
      {
        replacements: [playlist, catid],
        type: sequelize.QueryTypes.INSERT,
      }
    );
  },

  deletePlaylist: function(plid, catid, owner) {
    return sequelize.query(
      `DELETE FROM playlists
        WHERE idplaylists = ? AND category = ?;`,
      {
        replacements: [plid, catid],
        type: sequelize.QueryTypes.DELETE,
      }
    );
  },

  renamePlaylist: function(plid, plname, owner) {
    return sequelize.query(
      `UPDATE playlists
        set name = ? 
        WHERE idplaylists = ?`,
      {
        replacements: [plname, plid],
        type: sequelize.QueryTypes.UPDATE,
      }
    );
  },

  getCatOwner: function(profile) {
    return sequelize.query(
      `SELECT users.userName, users.idUsers
        FROM users
        WHERE users.idUsers = ?`,
      {
        replacements: [profile],
        type: sequelize.QueryTypes.SELECT,
      }
    );
  },

  getCats: function(user, profile) {
    if (!profile) {
      return sequelize.query(
        `SELECT
            categories.name AS catname,
            categories.idcategories as catid,
            playlists.name AS plname,
            playlists.idplaylists as plid,
            playlists.isPublic as isPublic
          FROM categories
            LEFT JOIN playlists
              ON categories.idcategories = playlists.category
          WHERE categories.owner = ?;`,
        {
          replacements: [user],
          type: sequelize.QueryTypes.SELECT,
        }
      );
    } else {
      return sequelize.query(
        `SELECT
            categories.name AS catname,
            categories.idcategories as catid,
            playlists.name AS plname,
            playlists.idplaylists as plid,
            playlists.isPublic as isPublic
          FROM categories
            LEFT JOIN playlists
              ON categories.idcategories = playlists.category
          WHERE categories.owner = ?
            AND playlists.isPublic = 1;`,
        {
          replacements: [profile],
          type: sequelize.QueryTypes.SELECT,
        }
      );
    }
  },
  /*
  getPlaylist: function(plid) {
    return sequelize.query(`SELECT * from playlists WHERE idplaylists = ?;`, {
      replacements: [plid],
      type: sequelize.QueryTypes.SELECT,
    });
  },
*/
  makePublic: function(plid) {
    return sequelize.query(
      `UPDATE playlists
        SET isPublic = 1
        WHERE idplaylists = ?;`,
      {
        replacements: [plid],
        type: sequelize.QueryTypes.UPDATE,
      }
    );
  },

  makePrivate: function(plid) {
    return sequelize.query(
      `UPDATE playlists
        SET isPublic = 0
        WHERE idplaylists = ?;`,
      {
        replacements: [plid],
        type: sequelize.QueryTypes.UPDATE,
      }
    );
  },

  getSongsForClone: function(plToClone) {
    return sequelize.query(
      `SELECT song
        FROM songsplaylistsbridge
        WHERE playlist = ?`,
      {
        replacements: [plToClone],
        type: sequelize.QueryTypes.SELECT,
      }
    );
  },

  clonePlaylist: function(songsList, plid) {
    var songs = [];
    for (var i = 0; i < songsList.length; i++) {
      songs.push([songsList[i].song, plid]);
    }
    return sequelize.query(
      `INSERT INTO songsplaylistsbridge (song, playlist)
        VALUES ?`,
      {
        replacements: [songs],
        type: sequelize.QueryTypes.INSERT,
      }
    );
  },

  getCatsOnly: function(user) {
    return sequelize.query(
      `SELECT categories.*
        FROM categories
        WHERE owner = ?`,
      {
        replacements: [user],
        type: sequelize.QueryTypes.SELECT,
      }
    );
  },
};
