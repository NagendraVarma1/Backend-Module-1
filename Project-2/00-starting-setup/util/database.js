const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "NagendraVarma@512", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;