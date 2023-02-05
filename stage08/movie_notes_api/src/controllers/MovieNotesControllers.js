const { response } = require("express")
const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class MovieNotesController {
    async create(request, response) {
        const { title, description, user_id, rating, tags } = request.body
        const validateUserId = await knex("users").where({ id: user_id }).first()

        if (!validateUserId) {
            throw new AppError("Usuário inválido")
        }

        if (!rating || rating <=0 || rating >= 6) {
            throw new AppError("A avaliação (rating) precisa ser entre 1 e 5.")
        }

        const note_id = await knex("movie_notes").insert({
            title,
            description,
            user_id,
            rating
        })

        const movieTagsInsert = tags.map(name => {
            return {
                note_id,
                user_id,
                name
            }
        })
        console.log("aqui");

        console.log(movieTagsInsert);

        await knex("movie_tags").insert(movieTagsInsert)

        response.json()
    }

    async show(request, response) {
        const { id } = request.body
        const movieNote = await knex("movie_notes").where({ id }).first()
        const movieTags = await knex("movie_tags")
            .where({ note_id: id })
            .orderBy("name")

        return response.json({
            ...movieNote,
            movieTags
        })
    }

    async index(request, response) {
        const { user_id } = request.query

        console.log(user_id);
        const movieNotes = await knex("movie_notes")
            .where({ user_id })
            .orderBy("title")
        response.json( movieNotes )
    }

    async delete(request, response) {
        const { id } = request.body

        await knex("movie_notes").where({ id }).delete()

        response.json()
    }
}

module.exports = MovieNotesController