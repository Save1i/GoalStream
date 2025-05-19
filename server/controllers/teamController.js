const {Team} = require("../modules/modules");
const ApiError = require("../error/ApiError");
require('dotenv').config(); 

class TeamController {

    async create(req, res, next) {
        try {
            const {players, name, img, team_stat} = req.body;

            const team = await Team.create({
                players, 
                name, 
                img, 
                team_stat
            }) 

            return res.json(team);
        } catch (error) {
            next(ApiError.internal("Ошибка при добавлении команды"));
        }
    }

    async getAll(req, res, next) {
        try {
            const teams = await Team.findAll();
            return res.json(teams);
        } catch (error) {
            console.error("Ошибка при получении всех команд:", error);
            next(ApiError.internal("Ошибка при получении списка команд"));
        }
    }

    // Получение одной команды по ID
    async getOne(req, res, next) {
        try {
            const { id } = req.params;

            const team = await Team.findByPk(id);
            if (!team) {
                return next(ApiError.badRequest("Команда не найдена"));
            }

            return res.json(team);
        } catch (error) {
            console.error("Ошибка при получении команды:", error);
            next(ApiError.internal("Ошибка при получении команды"));
        }
    }
}

module.exports = new TeamController();