const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

User.associate = models => {
  User.hasMany(models.Todo, {
    foreignKey: 'userId',
    as: 'todos'
  });
};

exports.User = User;