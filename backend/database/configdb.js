const { Sequelize } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize('ecoclicko', "root", "root", {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false, 
  },
});

module.exports=sequelize;