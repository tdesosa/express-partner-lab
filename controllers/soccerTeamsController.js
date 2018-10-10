// Require Express
const express = require('express');
const router = express.Router();

// Require The Models The Controller Needs
const SoccerTeams = require('../models/soccerTeams');

// Index Route
router.get("/", (req, res) => {
    res.render("index.ejs", {soccerTeams: SoccerTeams});
  });


// Index route
// Shows all the fruits
// router.get('/', (req, res) => {
//     res.render('index.ejs', {fruits: Fruits});
//   });

module.exports = router;