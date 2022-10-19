const express = require('express');
const Router = express.Router();
const controller = require('../controller/controller')



Router.get('/',controller.getHome)

Router.get('/add-user',controller.addUser)

Router.post('/blogs',controller.postUser)


Router.get("/update/:id/",controller.getUpdate)
 
Router.post("/update/:id/",controller.postUpdate)


Router.get('/delete/:id',controller.deleteUser)


module.exports = Router;