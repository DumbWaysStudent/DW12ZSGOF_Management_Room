'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('orders', [{
        room_id: '1',
        customer_id: '1',
        duration: 2,
        order_end_time: "2019-10-23 11:19:04",
        is_booked: 1,
        is_done: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        room_id: '2',
        customer_id: '2',
        duration: 1,
        order_end_time: "2019-10-23 11:19:04",
        is_booked: 1,
        is_done: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      ], 
      {});
    },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('orders', null, {});
  }
};
