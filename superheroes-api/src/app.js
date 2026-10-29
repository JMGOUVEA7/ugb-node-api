const express = require("express"); //importando tudo (descerialização)
const sequelize = require("./database/database");

const Hero = require("./models/Hero")
const Movie = require("./models/Movie")

const app = express()

Hero.belongsToMany(Movie, {
    through: "HeroMovies"
})

Movie.belongsToMany(Hero, {
    through: "MoviesHero"
})

sequelize.sync()
    .then(() => { //função q n tem nome, só executa (arrow function) 
        console.log("Banco de Dados sincronizado.")
    }) 

    .catch((error) => { 
        console.error("Erro a sincronizar o Banco", error)
    })

module.exports = app