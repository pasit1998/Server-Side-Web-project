const CabinetController = require('./controllers/CabinetController')
const UserController = require('./controllers/UserController')

module.exports = (app) =>{


    //get all cabinet
    app.get('/cabinets', CabinetController.index)

    //create
    app.post('/cabinet', CabinetController.create)

    //edit
    app.put('/cabinet/:cabinetId' , CabinetController.put)

    //delete
    app.delete('/cabinet/:cabinetId', CabinetController.remove)

    //show by id
    app.get('/cabinet/:cabinetId', CabinetController.show)


   //get all user
   app.get('/users', UserController.index)

   //create
   app.post('/user', UserController.create)

   //edit
   app.put('/user/:userId', UserController.put)

   //delete
   app.delete('/user/:userId', UserController.remove)

   //show by id
   app.get('/user/:userId', UserController.show)


}