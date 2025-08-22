let express = require("express");
let mongoose = require("mongoose");
const { createController, updateController, readController, deleteController } = require("./app/controllers/web/controller");

let app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/studentDb")
  .then(() => console.log("DB connected"));

let studentDetailSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  class: {
    require: true,
    type: Number,
  },
});
let studentModel = mongoose.model("studentDetail", studentDetailSchema);

//CURD

//create
app.get("/create", createController);

//update
app.put("/update/:id", updateController);

//read
app.get('/read/:id',readController)

//delete
app.delete('/delete/:id',deleteController)

app.listen(4000, () => {
  console.log("server is running on 4000");
});
