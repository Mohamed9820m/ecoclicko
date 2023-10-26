const { Sequelize } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(
  "bxczp0dljion9hvw6vap",
  "uvrb3dqyyar4r2ux",
  "6NySdNKWysGOJfNMG3iT",
  {
    host: "bxczp0dljion9hvw6vap-mysql.services.clever-cloud.com",
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  }
);

module.exports=sequelize;