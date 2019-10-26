const models = require('../models')
const Order = models.order


exports.store = (req, res) => {
    Order.create(
       req.body,
    ).then(order=> {
        res.send(
            req.body
        )
    })
}

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
