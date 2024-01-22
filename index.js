
// get all teams

app.get('/teams', (req, res) => {
    res.json(teams);
  });


///gets a team by id


app.get('/teams/:id', (req, res) => {
    const teamId = parseInt(req.params.id);
    const team = teams.find(t => t.id === teamId);
  
    if (team) {
      res.json(team);
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  });