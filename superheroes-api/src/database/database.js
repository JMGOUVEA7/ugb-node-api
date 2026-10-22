const { Sequelize, Model } = require("sequelize") //importando tudo 

const sequelize = new Sequelize ({
    dialect: "sqlite",
    storage: "./datebase.sqlite",
    logging: false
});

module.exports = sequelize;

