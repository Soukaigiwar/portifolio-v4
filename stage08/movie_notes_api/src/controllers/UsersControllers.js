const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class UsersControllers {
    async create(request, response) {
        const { name, email, password } = request.body

        const userExist = await knex("users").where({ name }).first()
        const emailExist = await knex("users").where({ email }).first()

        if (userExist || emailExist) {
            throw new AppError("Esse nome ou email já cadastrados.")
        }

        const hashedPassword = await hash(password, 8)

        await knex("users").insert({ name, email, password: hashedPassword })

        return response.status(201).json()
    }

    async update(request, response) {
        const { name, email, old_password, new_password } = request.body
        const { id } = request.params

        const user = await knex("users").where({ id }).first()

        if (!user) {
            throw new AppError("Usuário não encontrado.")
        }

        const emailExist = await knex("users").where( 'email', 'email' ).first()

        if (emailExist && emailExist.id !== user.id) {
            throw new AppError("Email já está em uso.")
        }

        user.name = name ?? user.name
        user.email = email ?? user.email

        if (new_password && !old_password) {
            throw new AppError("Precisa informar a senha antiga.")
        }

        const validateOldPassword = await compare(old_password, user.password)

        if (!validateOldPassword) {
            throw new AppError("Senha não confere.")
        }

        if (new_password && old_password) {
            user.password = await hash(new_password, 8)
        }

        await knex("users").where({ id }).update({
            name,
            email,
            password: user.password
        })

        return response.json()
    }
}

module.exports = UsersControllers