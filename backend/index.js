const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
const RoomController = require('./controllers/rooms')
const CustomerController = require('./controllers/customers')
const OrderController = require('./controllers/orders')

//middlewares
const { authenticated } = require('./middleware')
app.group("/api/v2", (router) => {

    //auth API
    router.post('/login', AuthController.login)
    router.post('/register', AuthController.register)

    //Room API
    router.get('/rooms', RoomController.index)  
    router.post('/room', RoomController.store)
    router.put('/room/:id', RoomController.update)

    //Customer API
    router.get('/customers', CustomerController.index)  
    router.post('/customer', CustomerController.store)
    router.put('/customer/:id', CustomerController.update)

    //CheckIn/CheckOut API
    router.get('/checkin', RoomController.listorder)  //Checkin
    router.post('/checkin', OrderController.store) //Addcheckin
    router.delete('/order/:id', OrderController.delete) //checkout
})

app.listen(process.env.PORT || 9876, function(){ 
    console.log ('Listening on our Port!')
})


