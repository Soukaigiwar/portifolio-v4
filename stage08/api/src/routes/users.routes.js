const { Router } = require("express")
const UsersControllers = require("../controllers/UsersControllers")

const usersRoutes = Router()

function myMiddleware(request, response, next) {
    console.log("voce passou pelo middleware");

    if (!request.body.isAdmin) return response.json({ message: "Unauthorized user" })
    
    next()
}

const usersControllers = new UsersControllers()

usersRoutes.post("/", myMiddleware, usersControllers.create)

module.exports = usersRoutes
