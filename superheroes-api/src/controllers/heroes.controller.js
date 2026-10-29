const Hero = require ("../models/Hero")

async function list(paramsreq, res) {
    const movies = await Hero.findAll()
    return res.status(200).json(movies);
}

//pesquisar assinc await
module.exports = {
    list
};