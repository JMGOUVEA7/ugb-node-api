const Movie = require("../models/Movie");
const Hero = require("../models/Hero");

// listar todos filmes
async function list(req, res) {
    try {
        const movies = await Movie.findAll({
            include: Hero
        });

        return res.status(200).json(movies);

    } catch (error) {
        return res.status(500).json({
            message: "Erro ao listar filmes.",
            error: error.message
        });
    }
}

// buscar filme pelo id
async function getById(req, res) {
    try {
        const movie = await Movie.findByPk(req.params.id, {
            include: Hero
        });

        if (!movie) {
            return res.status(404).json({
                message: "Filme não encontrado."
            });
        }

        return res.status(200).json(movie);

    } catch (error) {
        return res.status(500).json({
            message: "Erro ao buscar filme.",
            error: error.message
        });
    }
}

// cadastrar filme
async function create(req, res) {
    try {
        const { title, year } = req.body;

        if (!title || year === undefined || !Number.isInteger(Number(year))) {
            return res.status(400).json({
                message: "Título e ano válido são obrigatórios."
            });
        }

        const movie = await Movie.create({
            title,
            year: Number(year)
        });

        return res.status(201).json(movie);

    } catch (error) {
        return res.status(500).json({
            message: "Erro ao cadastrar filme.",
            error: error.message
        });
    }
}

// atualizar filme
async function update(req, res) {
    try {
        const movie = await Movie.findByPk(req.params.id);

        if (!movie) {
            return res.status(404).json({
                message: "Filme não encontrado."
            });
        }

        const { title, year } = req.body;

        if (title !== undefined) {
            movie.title = title;
        }

        if (year !== undefined) {
            if (!Number.isInteger(Number(year))) {
                return res.status(400).json({
                    message: "O ano deve ser um número inteiro."
                });
            }

            movie.year = Number(year);
        }

        await movie.save();

        return res.status(200).json(movie);

    } catch (error) {
        return res.status(500).json({
            message: "Erro ao atualizar filme.",
            error: error.message
        });
    }
}

// excluir filme
async function remove(req, res) {
    try {
        const movie = await Movie.findByPk(req.params.id);

        if (!movie) {
            return res.status(404).json({
                message: "Filme não encontrado."
            });
        }

        await movie.destroy();

        return res.status(200).json({
            message: "Filme excluído com sucesso."
        });

    } catch (error) {
        return res.status(500).json({
            message: "Erro ao excluir filme.",
            error: error.message
        });
    }
}


module.exports = {
    list,
    getById,
    create,
    update,
    remove
};
