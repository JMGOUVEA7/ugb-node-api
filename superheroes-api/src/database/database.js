const { Sequelize, Model } = require("sequelize") //importando tudo (descerialização) //importando só um pedaço (módulo ou função)

const sequelize = new Sequelize ({
    dialect: "sqlite",
    storage: "./datebase.sqlite",
    logging: false
});

module.exports = sequelize;

