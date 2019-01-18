var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
Sequelize = require('sequelize');
var sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,

  {
    host: '/cloudsql/thread-204819:us-central1:thread-db1',
    dialect: 'mysql',
    dialectOptions: {
      socketPath: '/cloudsql/thread-204819:us-central1:thread-db',
    },
    define: {
      timestamps: false,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('connection has been established');
  })
  .catch(err => {
    console.error('unable to connect to db', err);
  });

module.exports = { sequelize, Sequelize };
