// get all teams

app.get('/teams', (req, res) => {
    const query = `SELECT * FROM TEAMS`;
    res.json(teams);
  });

///gets a team by id


app.get('/teams/:id', (req, res) => {

    //looked this functionality up
    const teamId = parseInt(req.body.id);
    const team = teams.find(t => t.id === teamId);
  
    if (team) {
      res.json(team);
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  });

  app.get('/players/:id', (req, res) => {

    //looked this functionality up
    const playerId = parseInt(req.body.id);
    const player = players.find(t => t.id === playerId);
  
    if (team) {
      res.json(player);
    } else {
      res.status(404).json({ message: 'Player not found' });
    }
  });