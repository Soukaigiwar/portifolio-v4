const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class MovieTagsController {
    async index(request, response) {
        
        const { user_id } = request.body

        const tags = await knex("movie_tags").where({ user_id }).first()

        if (!tags) {
            throw new AppError("Nenhuma tag cadastrada para esse usuário")
        }


        response.json(tags)
    }
}

module.exports = MovieTagsController