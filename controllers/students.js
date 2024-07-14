const Student = require('../models/student');

async function getStudents(req, res){
    res.render("students");
    
    // console.log(std);
//    res.render("students");
 
}
async function newStudent(req,res){
    const std = new Student({
        Rno:req.body.rno,
    name:req.body.name,
    faname:req.body.father, 
    moname:req.body.mother,
    address:req.body.address,
    gender:req.body.gen,
    contact:req.body.contact,
    dob:req.body.dob,
    mail:req.body.mail,
    class:{
     class:req.body.class,
     section:req.body.sec,
    }
    })
  //  console.log(req.body.name);
     std.save();
     res.redirect("students");
}

module.exports={
    getStudents,newStudent
}