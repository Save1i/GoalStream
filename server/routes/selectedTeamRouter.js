const express = require("express");
const router = express.Router();

const selectedTeamController = require("../controllers/selectedTeamController");

router.post("/create", selectedTeamController.create); 
router.get("/:userId", selectedTeamController.getAll);

module.exports = router;