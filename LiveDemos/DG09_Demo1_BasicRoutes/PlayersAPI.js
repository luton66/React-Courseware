const PlayerAPI = {
    players: [
      {number: 1, name: "Gary Goalie", position: "G" },
      {number: 2, name: "Dave Defender", position: "D" },
      {number: 3, name: "Freddie Fullback", position: "D" },
      {number: 4, name: "Matty Midfielder", position: "M" },
      {number: 5, name: "Wayne Winger", position: "W" },
      {number: 6, name: "Sammy Striker", position: "F"}
    ],
    all: function() {return this.players},
    get: function(id) {
      const isPlayer = p => p.number === id
      return this.players.find(isPlayer)
    }
  };

  export default PlayerAPI;