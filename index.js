const express = require('express');
const app = express();
const db = require("./db")
const port = 3000;

app.use(express.json());

//get individuals players
app.get("/players/:id", db.getPlayerById);

//get individual teams
app.get("/players/:id", db.getPlayerById);




