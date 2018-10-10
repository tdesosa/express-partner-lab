const express = require ('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Setup Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Require The Controller
const soccerTeamsController = require('./controllers/soccerTeamsController')

// Set Up Routes In SoccerTems Controller
app.use('/soccerTeams', soccerTeamsController);

// Server Is Listening
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

module.exports = app;