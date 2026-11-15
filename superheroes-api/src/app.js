const express = require("express"); //importando tudo (descerialização)
const sequelize = require("./database/database");

const Hero = require("./models/Hero");
const Movie = require("./models/Movie");

const heroesRoutes = require("./routes/heroes.routes");
const moviesRoutes = require("./routes/moviesRoutes.route");

const app = express();
app.use(express.json());

// relacionamento de muiots para muitos
Hero.belongsToMany(Movie, {
    through: "HeroMovies"
});

Movie.belongsToMany(Hero, {
    through: "MoviesHero"
});


// rotas
app.use("/heroes", heroesRoutes);
app.use("/movies", moviesRoutes);


//sincronização de banco de dados
sequelize.sync()
    .then(() => { //função q n tem nome, só executa (arrow function) 
        console.log("Banco de Dados sincronizado.")
    }) 

    .catch((error) => { 
        console.error("Erro a sincronizar o Banco:", error)
    });


module.exports = app;