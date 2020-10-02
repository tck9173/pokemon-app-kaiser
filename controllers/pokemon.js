const Pokemon = require('../models').Pokemon;
const Player = require('../models').Player;

//working
const index = (req,res) => {
    Pokemon.findAll({
        order: [
            ['id','ASC']
        ]
    })
    .then(pokemon => {
        res.render('index.ejs', {
            pokemon: pokemon
        });    
    })
}

//working
const newPokemon = (req, res) => {
    res.render('new.ejs');
}

//working
const showPokemon = (req, res) => {
    Pokemon.findByPk(req.params.index, {
        include: [{
            model: Player
        }] 
    })
    .then(pokemon => {
        Player.findAll()
        .then(allPlayers => {
            res.render('show.ejs', {
                pokemon: pokemon,
                player: allPlayers
            }); 
        })  
    })
};

//working
const editPokemon = (req,res) => {
    Pokemon.findByPk(req.params.index)
    .then(pokemon => {
        res.render('edit.ejs', { 
            pokemon: pokemon
        });    
    })
    
}

//working
const newPokemonAction = (req,res) => {
    Pokemon.create(req.body)
    .then(newPokemon => {
        res.redirect('/pokemon');    
    })    
}

//working
const editPokemonAction = (req,res) => {
    Pokemon.update(req.body, {
        where: {id: req.params.index},
        returning: true,
    })
    .then(pokemon => {
        res.redirect(`/pokemon/${req.params.index}`)    
    })
}

const deletePokemon = (req,res) => {
    Pokemon.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/pokemon');    
    })    
}

module.exports = {
    index,
    newPokemon,
    showPokemon,
    editPokemon,
    newPokemonAction,
    editPokemonAction, 
    deletePokemon
}