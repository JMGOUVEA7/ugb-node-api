const express = require("express");
const router = express.Router();

const heroesController = require("../controllers/heroes.controller");

router.get("/", heroesController.list);

router.get("/:id/movies", heroesController.listMovies);

router.get("/:id", heroesController.getById);

router.post("/", heroesController.create);

router.put("/:id", heroesController.update);

router.delete("/:id", heroesController.remove);

router.post("/:id/movies/:movieId", heroesController.addMovie);

router.delete("/:id/movies/:movieId", heroesController.removeMovie);

module.exports = router;