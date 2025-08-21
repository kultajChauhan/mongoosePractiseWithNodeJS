let express = require("express");
let mongoose = require("mongoose");

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
app.get("/create", async (req, res) => {
  let { sName, sEmail, sClass } = req.body;

  let student1 = new studentModel({
    name: sName,
    email: sEmail,
    class: sClass,
  });

  let result = await student1.save();

  res.send({ student1, result });
});

//update
app.put("/update/:id", async (req, res) => {
  let { sName, sEmail, sClass } = req.body;

  let studentId = req.params.id;

  let student = await studentModel.findById( studentId);

  console.log(student)

  if (sName != undefined) {
    student.name = sName;
  }  if (sEmail != undefined) {
    student.email = sEmail;
  }  if (sClass != undefined) {
    student.class = sClass;
  }

  let result = await student.save()

  res.send({student,result});
});

//read
app.get('/read/:id',async (req,res)=>{

    let studentId = req.params.id

    let student = await studentModel.findById(studentId)

    res.send(student)
})

//delete
app.delete('/delete/:id',async (req,res)=>{

    let studentId = req.params.id

    let deletedStudent = await studentModel.deleteOne({_id:studentId})

    res.send(deletedStudent)

})

app.listen(4000, () => {
  console.log("server is running on 4000");
});
