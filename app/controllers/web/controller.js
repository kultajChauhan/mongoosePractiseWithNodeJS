const studentModel = require("../../models/web/models");


let createController = async (req, res) => {
  let { sName, sEmail, sClass } = req.body;

  let student1 = new studentModel({
    name: sName,
    email: sEmail,
    class: sClass,
  });

  let result = await student1.save();

  res.send({ student1, result });
}

let updateController = async (req, res) => {
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
}

let readController = async (req,res)=>{

    let studentId = req.params.id

    let student = await studentModel.findById(studentId)

    res.send(student)
}

let deleteController = async (req,res)=>{

    let studentId = req.params.id

    let deletedStudent = await studentModel.deleteOne({_id:studentId})

    res.send(deletedStudent)

}

module.exports={readController,createController,updateController,deleteController}