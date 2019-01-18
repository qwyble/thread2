const { sequelize, Sequelize } = require('../db/dbConnect.js');

module.exports = {
  getUser: function(profileId) {
    return sequelize.query(`SELECT * FROM users WHERE idUsers = ?`, {
      replacements: [profileId],
      type: sequelize.QueryTypes.SELECT,
    });
  },
};
