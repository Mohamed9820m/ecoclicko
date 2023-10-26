const { Sequelize } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize('ecoclicko', "root", "admin", {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false, 
  },
});

module.exports=sequelize;