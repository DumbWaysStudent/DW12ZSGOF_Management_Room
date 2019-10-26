const models = require('../models')
const Customer = models.customer


exports.index = (req, res) => {
    Customer.findAll().then(result=>res.send(result))
}

exports.store = (req, res) => {
    Customer.create(
       req.body,
    ).then(customer=> {
        res.send(
            req.body
        )
    })
}

exports.update = (req, res) => {
    Customer.update(req.body,{
        where: {
            id: req.params.id
        }
    }).then(customer=> {
        res.send({
            message: "success",
            data : req.body
        })
    })
}
