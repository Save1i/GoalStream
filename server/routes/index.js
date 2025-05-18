const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
// const playerRouter = require("./playerRouter");
// const teamRouter = require("./teamRouter");
// const selectedPlayerRouter = require("./selectedPlayerRouter");
// const selectedTeamRouter = require("./selectedTeamRouter");

router.use("/user", userRouter);
// router.use("/player", playerRouter);
// router.use("/team", teamRouter);
// router.use("/selectPlayer", selectedPlayerRouter);
// router.use("/selectTeam", selectedTeamRouter);

module.exports = router;
