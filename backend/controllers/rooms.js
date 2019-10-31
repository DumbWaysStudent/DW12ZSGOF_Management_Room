const models = require('../models')
const Room = models.room
const Order = models.order

exports.index = (req, res) => {
    Room.findAll().then(result=>res.send(result))
}

exports.listorder = (req, res) => {
    Room.findAll({include: [{
        model: Order,
        as: "order"
    }]}).then(result=>res.send(result))
}

exports.store = (req, res) => {
    Room.create(
       req.body,
    ).then(room=> {
        res.send(
            req.body
        )
    })
}

exports.update = (req, res) => {
    Room.update(req.body,{
        where: {
            id: req.params.id
        }
    }).then(room=> {
        res.send({
            message: "success",
            data : req.body
        })
    })
}
