const { DataTypes } = require('sequelize');
const sequelize =require('../configdb')

const Admin = sequelize.define('Admin', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    adminEmail: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    adminPassword: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  });

  module.exports=Admin