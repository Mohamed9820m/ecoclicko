const { DataTypes } = require('sequelize');
const sequelize = require('../configdb');
const Admin = require('../models/AdminModel');

const Blog = sequelize.define('Blog', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  blogTitle: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  blogContent: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  blogImage: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  blogCategory: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

Blog.belongsTo(Admin, { foreignKey: 'admins_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Blog;
