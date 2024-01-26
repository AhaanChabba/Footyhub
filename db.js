
app.get('/teams', (req, res) => {
    const query = `SELECT * FROM TEAMS`;
    res.json(teams);
});



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


/// need to understand the difference between .body and .params
