let express = require('express')

const { createController, updateController, readController, deleteController } = require("../../controllers/web/controller.js");

let studentRoutes=express.Router()

//CURD

//create
studentRoutes.get("/create", createController);

//update
studentRoutes.put("/update/:id", updateController);

//read
studentRoutes.get('/read/:id',readController)

//delete
studentRoutes.delete('/delete/:id',deleteController)

module.exports=studentRoutes