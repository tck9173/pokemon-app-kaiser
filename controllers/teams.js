const Team = require('../models').Team;
const Player = require('../models').Player;
const Pokemon = require('../models').Pokemon;

const renderIndex = (req,res) => {
    Team.findAll({
        order: [
            ['id','ASC']
        ]
    })
    .then(team => {
        Player.findAll()
        .then(allPlayers => {
            res.render('teams/index.ejs', {
                team: team,
                player: allPlayers
            })    
        })
        
    })
    
}

module.exports = {
   renderIndex
}