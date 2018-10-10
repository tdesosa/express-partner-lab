// Require Express
const express = require('express');
const router = express.Router();

// Require The Models The Controller Needs
const SoccerTeams = require('../models/soccerTeams');

// Index Route
router.get("/", (req, res) => {
    res.render("index.ejs", {soccerTeams: SoccerTeams});
});

// Delete Route

router.delete('/:id', (req, res) => {
    SoccerTeams.splice(req.params.id, 1);
    res.redirect('/soccerTeams');
});

module.exports = router;