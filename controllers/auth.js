const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user

exports.login = (req, res)=>{    
    //check if username and pass match in db tbl user
    const username = req.body.username
    const password = req.body.password //use encryption in real world case!

    User.findOne({where: {username, password}}).then(user=>{
        if(user){
            const token = jwt.sign({ userId: user.id }, 'my-secret-key')
            res.send({
                user,
                token
            }) 
        }else{
            res.send({
                error: true,
                message: "Wrong username or Password!"
            })
        }
    })  
}

exports.register = (req, res) => {
    User.create(req.body).then(user=> {
    const token = jwt.sign( {userId: user.id} , 'my-secret-key')
        res.send({
            message: "success",
            username : user.username,
            token
        })
    })
}
