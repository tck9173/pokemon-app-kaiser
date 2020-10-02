'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pokemons', [
      {
        name: "Bulbasaur",
        img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"
      },
      {
        name: "Ivysaur",
        img: "http://img.pokemondb.net/artwork/ivysaur.jpg"
      },
      {
        name: "Venusaur",
        img: "http://img.pokemondb.net/artwork/venusaur.jpg"
      },
      {
        name: "Charmander",
        img: "http://img.pokemondb.net/artwork/charmander.jpg"
      },
      {
        name: "Charizard",
        img: "http://img.pokemondb.net/artwork/charizard.jpg"
      },
      {
        name: "Squirtle",
        img: "http://img.pokemondb.net/artwork/squirtle.jpg"
      },
      {
        name: "Wartortle",
        img: "http://img.pokemondb.net/artwork/wartortle.jpg"
      }
    ],{});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
