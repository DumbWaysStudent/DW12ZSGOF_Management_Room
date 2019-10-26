'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        username: 'admin',
        password: 'admin',
        createdAt : new Date(),
        updatedAt : new Date()
      },
    {
      username: 'admin2',
      password: 'admin2',
      createdAt : new Date(),
      updatedAt : new Date()
    }
    ],);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
