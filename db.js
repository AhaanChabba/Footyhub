const path = require("path");
const sqlite = require("sqlite3").verbose();
const dbFile = path.join(__dirname, "database.sqlite"); /// not a clue what this does
const db = new sqlite.Database(dbFile, (error) => {
    if (error) return console.error(error.message);
    console.log(`Connected to database ${dbFile}`);
});


app.get('/teams', (req, res) => {
    const query = `SELECT * FROM TEAMS`;
    res.json(teams);
});


//Gets all players
const getPlayerById = (req, res) => {

    const playerId = parseInt(req.body.id);
    const query = `SELECT * FROM Player WHERE id = ?`;

    db.get(query, [playerId], (error, result) => {
        if (error) {
            console.error(error.message);
            res.status(400).json({ error: error.message });
            return;
        }

        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    });

};

//Gets all teams  
const getTeamById = (req, res) => {

    // 
    const teamId = parseInt(req.body.id);
    const query = `SELECT * FROM Team WHERE id = ?`;

    db.get(query, [teamId], (error, result) => {
        if (error) {
            console.error(error.message);
            res.status(400).json({ error: error.message });
            return;
        }

        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    });
};

const getCountryById = (req, res) => {
    const query = `SELECT * FROM Country`;

    db.all(query, [], (error, results) => {
        if (error) {
            console.error(error.message);
            res.status(400).json({ error: error.message });
            return;
        }

        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    });
};

// Gets all leagues
const getLeagueById = (req, res) => {
    const query = `SELECT * FROM League`;

    db.all(query, [], (error, results) => {
        if (error) {
            console.error(error.message);
            res.status(400).json({ error: error.message });
            return;
        }

        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    });
};


/// need to understand the difference between .body and .params




//#endregion Routes

module.exports = {
    getLeagueById,
    getCountryById,
    getTeamById,
    getPlayerById,
};