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

// Edit Route

router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {
      soccerTeams: SoccerTeams[req.params.id],
      //id: req.params.id
    });
  });


module.exports = router;