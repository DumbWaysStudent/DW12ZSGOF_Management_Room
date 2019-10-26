'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [{
      name: 'Jhon Doe',
      identity_number: 'kmzwa8awaa',
      phone_number: '081234567890',
      image: 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
  {
      name: 'Rahmad',
      identity_number: 'a1232422421zz',
      phone_number: '081234567890',
      image: 1,
      createdAt : new Date(),
      updatedAt : new Date()
  }])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('customers', null, {});
  }
};
