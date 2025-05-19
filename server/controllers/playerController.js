const {Player, SelectedTeam, Team} = require("../modules/modules")
const { Op } = require("sequelize");
require('dotenv').config(); 

class PlayerController {
    async create(req, res, next) {
        const {name, img, teamId} = req.body;

         if (!name || !teamId) {
            return res.status(400).json({ message: "Отсутствуют обязательные поля" });
        }

        let player = await Player.create({
            name,
            img,
            teamId
        })

        return res.json(player)
    }

    async getAll(req, res, next) {
        const {userId} = req.params;

        const selectedTeamAll = await SelectedTeam.findAll({where: {userId}})

        const teamIds = selectedTeamAll.map(team => Number(team.teamId))

        if (!teamIds.length) {
            return res.json([]);
        }


        const players = await Player.findAll({where: {id: {
            [Op.in]: teamIds
        }}})

        res.json(players)
    }
}

module.exports = new PlayerController();