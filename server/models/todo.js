const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Todo = sequelize.define("Todo", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true,
  },
  description: {
    type: DataTypes.STRING,
  },
  archived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Todo.associate = (models) => {
  Todo.belongsTo(models.User, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });
};

exports.Todo = Todo;
