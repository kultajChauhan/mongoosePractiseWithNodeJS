let mongoose = require("mongoose");

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

module.exports=studentModel