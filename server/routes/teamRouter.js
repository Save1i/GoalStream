const express = require("express");
const router = express.Router();

const teamController = require("../controllers/teamController");

router.post("/create", teamController.create); 
router.get("/", teamController.getAll);
router.get("/:userId", teamController.getOne);

module.exports = router;
    