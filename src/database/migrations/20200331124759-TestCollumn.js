'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Vendedor', 'Descricao', {
          type: Sequelize.DataTypes.STRING
        }, {
          transaction: t
        }),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Vendedor', 'Descricao', {
          type: Sequelize.DataTypes.STRING
        }, {
          transaction: t
        }),
      ]);
    });
  }
};