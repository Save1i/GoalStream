const {SelectedTeam, Team} = require("../modules/modules")
const { Op } = require("sequelize");
require('dotenv').config(); 

class SelectTeamController {
    async create(req, res, next) {
        const {userId, teamId} = req.body;

        let selectTeam = await SelectedTeam.create({
            userId,
            teamId
        })

        return res.json(selectTeam)
    }

    async getAll(req, res, next) {
        const {userId} = req.params;

        const selectedTeamAll = await SelectedTeam.findAll({where: {userId}})

        const teamIds = selectedTeamAll.map(team => Number(team.teamId))

        if (!teamIds.length) {
            return res.json([]);
        }


        const teams = await Team.findAll({where: {id: {
            [Op.in]: teamIds
        }}})

        res.json(teams)
    }
}

module.exports = new SelectTeamController();