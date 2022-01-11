const team = {
    _players: [
      {
        firstName: 'Michael',
        lastName: 'Jordan',
        age: 30
      },
      {
        firstName: 'Lebron',
        lastName: 'James',
        age: 20
      },
      {
        firstName: 'Kevin',
        lastName: 'Durrant',
        age: 15
      }
    ],
    _games: [
      {
        opponent: 'Heat',
        teamPoints: 101,
        opponentPoints: 95
      },
      {
        opponent: 'Rockets',
        teamPoints: 98,
        opponentPoints: 104
      },
      {
        opponent: 'Celtics',
        teamPoints: 93,
        opponentPoints: 87
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age,
      };
      return this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints,
      };
      return this.games.push(game);
    }  
  };
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Mavericks', 110, 90);
  team.addGame('Wizards', 92, 85);
  team.addGame('Knicks', 96, 88);
  
  console.log(team.players)
  console.log(team.games)