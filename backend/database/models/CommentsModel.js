const { DataTypes } = require('sequelize');
const sequelize = require('../configdb');
const Users = require('../models/UsersModel');
const Blog = require('../models/BlogModel');

const Comments = sequelize.define('Comments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

Comments.belongsTo(Blog, { foreignKey: 'blog_id', onDelete: 'CASCADE', onUpdate: 'CASCADE', allowNull: false });
Comments.belongsTo(Users, { foreignKey: 'users_id', onDelete: 'CASCADE', onUpdate: 'CASCADE', allowNull: false });

module.exports = Comments;
