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

// Gets all countries
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