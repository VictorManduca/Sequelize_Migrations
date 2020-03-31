'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Vendedor', 'created_at', {
          transaction: t
        }),
        queryInterface.removeColumn('Vendedor', 'updated_at', {
          transaction: t
        }),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Vendedor', 'created_at', {
          transaction: t
        }),
        queryInterface.removeColumn('Vendedor', 'updated_at', {
          transaction: t
        }),
      ]);
    });
  }
};