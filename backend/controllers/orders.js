const moment = require('moment');
const models = require('../models')
const Order = models.order


exports.store = (req, res) => {
  moment.locale('id');
  const {room_id, customer_id, duration} = req.body;
  const startdate = moment().format();
  let end_date_time = moment(startdate)
    .add(duration, 'minutes')
    .format();
  Order.create({
    room_id: room_id,
    customer_id: customer_id,
    duration: duration,
    order_end_time: end_date_time,
    is_booked: true,
    is_done: false,
  }).then(order => {
    console.log(order);
    res.send(order);
  });
};

exports.update = (req, res) => {
    Order.update(req.body,{
        where: {
            id: req.params.id
        }
    }).then(order=> {
        res.send({
            message: "success",
            data : req.body
        })
    })
}

exports.delete = (req, res) => {
    Order.destroy({
        where: {
            id: req.params.id
        }
    }).then(order=> {
        res.send({
            message: "success",
        })
    })
}
