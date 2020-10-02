'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Teams", [
        {
          name: "Valor"
        },
        {
          name: "Mystic"
        },
        {
          name: "Instinct"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teams', null, {});
  }
};
