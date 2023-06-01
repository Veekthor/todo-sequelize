const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URI, {
  logging: true,
});

module.exports = sequelize;