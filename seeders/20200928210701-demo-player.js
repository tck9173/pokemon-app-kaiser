'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Players', [
      {
        name:'Ash',
        username: 'pokemon1',
        password: 'gottacatchthemall',
        teamId: 1
      },
      {
        name:'Misty',
        username: 'water1',
        password: `lovepokemon`,
        teamId: 2
      },
      {
        name:'Brock',
        username: 'rock1',
        password: 'allthepokemon',
        teamId: 3
      }
    ],{});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Players', null, {});
  }
};
