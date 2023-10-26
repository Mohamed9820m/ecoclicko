const { DataTypes } = require('sequelize');
const sequelize = require('../configdb');

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  userEmail: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  userPassword: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  isvalid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  activationcode: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  resetPasswordToken: {  
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  userAboutMe:{
    type: DataTypes.TEXT(),
    allowNull: true
  },
  userGender:{
    type: DataTypes.STRING(10),
    allowNull:true
  }
});

module.exports = Users;
