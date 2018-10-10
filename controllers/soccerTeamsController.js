const express = require('express');
const router = express.Router();

// Require the models that our controller needs
const SoccerTeams = require('../models/soccerTeams');

router.get("/", (req, res) => {
    res.send(SoccerTeams);
  });


module.exports = router;