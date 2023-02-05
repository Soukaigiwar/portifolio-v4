const { Router } = require("express")

const UsersControllers = require("../controllers/UsersControllers")

const userController = new UsersControllers()

const usersRoutes = Router()

usersRoutes.post("/", userController.create)
usersRoutes.put("/:id", userController.update)

module.exports = usersRoutes