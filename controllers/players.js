const Team = require('../models').Team;
const Player = require('../models').Player;
const Pokemon = require('../models').Pokemon;

//working
const renderIndex = (req,res) => {
    res.render('players/index.ejs')
}

//working
const renderSignUp = (req,res) => {
    res.render('players/signup.ejs')
}

//working
const renderProfile = (req,res) => {
    let teamNames;
    Team.findAll()
    .then(teamsFound => {
        teamNames = teamsFound;
    })
    Player.findByPk(req.params.index, {
        include: [{
            model: Team,
            attribute: ['name']
        },
        {
            model: Pokemon
        }
    ]
    })
    .then(player => {
        Pokemon.findAll()
        .then(allPokemon => {
            res.render('players/profile.ejs', {
            player: player,
            teams: teamNames,
            pokemon: allPokemon
            }) 
        })
    }) 
}

//working
const renderLogin = (req,res) => {
    res.render('players/login.ejs')
}

//working
const loginAction = (req,res) => {
    Player.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundPlayer => {
        res.redirect(`/players/profile/${foundPlayer.id}`);    
    })
}

//working
const createPlayer = (req,res) => {
    Player.create(req.body)
    .then(newPlayer => {
        res.redirect(`/players/profile/${newPlayer.id}`);    
    })
    
}

//working
const editProfile = (req,res) => {
    Player.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatePlayer => {
        Pokemon.findByPk(req.body.pokemon)
        .then(foundPokemon => {
            Player.findByPk(req.params.index)
            .then(foundPlayer => {
                foundPlayer.addPokemon(foundPokemon);
                res.redirect(`/players/profile/${req.params.index}`);
            })
        })    
    })
}

//working
const deletePlayer = (req,res) => {
    Player.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/players/');    
    })
}

module.exports = {
    renderIndex,
    renderSignUp,
    renderProfile,
    renderLogin,
    loginAction,
    createPlayer,
    editProfile,
    deletePlayer
}