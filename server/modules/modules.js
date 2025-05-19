const {DataTypes} = require("sequelize")
const sequelize = require("../db")

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING,  defaultValue: "null"},
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Team = sequelize.define("team", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  players: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  team_stat: { type: DataTypes.INTEGER },
});

const SelectedTeam = sequelize.define("selected_team", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, {
  indexes: [
    {
      unique: true,
      fields: ['userId', 'teamId'],
    },
  ],
});

const Player = sequelize.define("player", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  number: { type: DataTypes.STRING, defaultValue: "1"},
  img: { type: DataTypes.STRING, allowNull: false },
  teamId: { type: DataTypes.STRING, allowNull: false },
});

const SelectedPlayer = sequelize.define("selected_player", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, {
  indexes: [
    {
      unique: true,
      fields: ['userId', 'playerId'],
    },
  ],
});

User.hasMany(SelectedTeam);
SelectedTeam.belongsTo(User);

User.hasMany(SelectedPlayer);
SelectedPlayer.belongsTo(User);

Team.hasMany(SelectedTeam);
SelectedTeam.belongsTo(Team);

Player.hasMany(SelectedPlayer);
SelectedPlayer.belongsTo(Player);

module.exports = {
    User,
    Player,
    Team,
    SelectedPlayer,
    SelectedTeam,
}