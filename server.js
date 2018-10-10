const express = require ('express');
const app = express();
const port = 3000;

const SoccerTeams = require('./controllers/soccerTeamsController')

app.use('/soccerTeams', SoccerTeams);


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});