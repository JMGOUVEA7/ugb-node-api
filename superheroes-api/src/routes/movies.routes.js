const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/movies.controller");

router.get("/", moviesController.list);

router.get("/:id", moviesController.getById);

router.post("/", moviesController.create);

router.put("/:id", moviesController.update);

router.delete("/:id", moviesController.remove);

module.exports = router;
