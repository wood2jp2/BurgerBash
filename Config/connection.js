const
  Sequelize = require("sequelize"),
  sequelize = new Sequelize("burgers_db", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

module.exports = sequelize;
