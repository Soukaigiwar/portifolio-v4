const { Router } = require("express")

const MovieTagsControllers = require("../controllers/MovieTagsControllers")

const movieTagsController = new MovieTagsControllers()

const movieTagsRoutes = Router()

movieTagsRoutes.get("/", movieTagsController.index)

module.exports = movieTagsRoutes