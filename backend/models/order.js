'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    room_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    order_end_time: DataTypes.DATE,
    is_booked: DataTypes.BOOLEAN,
    is_done: DataTypes.BOOLEAN
  }, {});
  order.associate = function(models) {
    order.belongsTo(models.customer, {
      as: 'customer',
      foreignKey: 'customer_id',
    });
  };
  return order;
};