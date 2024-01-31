const express = require('express');
const app = express();
const db = require("./db")
const port = 3000;

app.use(express.json());

//get individuals players
app.get("/players/:id", db.getPlayerById);

//get individual teams
app.get("/team/:id", db.getTeamById);

//get individual country
app.get("/country/:id", db.getCountryById);

//get individual league
app.get("/league/:id", db.getLeagueById);








