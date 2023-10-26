const { Sequelize } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(
  "bfvca6vlsd5qqhcsejfq",
  "ue5o0lh5dkva8vzb",
  "63YDeMo84iAlXAd3SVS8",
  {
    host: "bfvca6vlsd5qqhcsejfq-mysql.services.clever-cloud.com",
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  }
);

module.exports=sequelize;