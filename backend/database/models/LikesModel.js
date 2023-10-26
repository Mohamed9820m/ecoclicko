const { DataTypes } = require('sequelize');
const sequelize =require('../configdb')
const Users =require('../models/UsersModel');
const Blog = require('../models/BlogModel');
const Likes = sequelize.define('Likes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    like: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

  });


  Likes.belongsTo(Users, { foreignKey: 'users_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Likes.belongsTo(Blog, { foreignKey: 'blog_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  module.exports=Likes