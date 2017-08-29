var
  orm = require('../Config/orm.js'),
  Sequelize = require('sequelize');

var Burger = Sequelize.define('burger', {
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type.Sequelize.BOOLEAN
  }
});

Burger.sync();

module.exports = Burger;
