const {SelectedTeam, Team} = require("../modules/modules")
const { Op } = require("sequelize");
require('dotenv').config(); 

class SelectTeamController {
    async create(req, res, next) {
  try {
    const { userId, teamId } = req.body;

    if (!userId || !teamId) {
      return res.status(400).json({ message: "userId и teamId обязательны" });
    }

    const team = await Team.findByPk(teamId);
    if (!team) {
      return res.status(400).json({ message: "Команда с таким teamId не найдена" });
    }

    const selectTeam = await SelectedTeam.create({ userId, teamId });

    return res.status(201).json(selectTeam);
  } catch (error) {
    console.error("Ошибка при создании избранной команды:", error.stack || error);
    return res.status(500).json({ message: "Внутренняя ошибка сервера" });
  }
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