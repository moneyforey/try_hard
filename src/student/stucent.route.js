const { Router } = require("express");
const Student = require("./student.model");

const studentRouter = Router();

studentRouter.get('/',async(req,res)=>{
    const students = await Student.find();
    res.send(students);
})

studentRouter.post('/',async(req,res)=>{
    const newstudent = new Student({...req.body});
    console.log(newstudent);
    await newstudent.save();
    res.send(newstudent);
})

studentRouter.delete(`/:id`,async(req,res)=>{
    // console.log(req.params);
     const _id = req.params.id;
     const reqstd = await Student.findByIdAndDelete(_id);
     res.send({reqstd,message:"student deleted"});
})

studentRouter.put('/:id',async(req,res)=>{
    const _id = req.params.id;
    const reqstd = await Student.findByIdAndUpdate(_id,{...req.body});
    res.send({reqstd});
     
})


module.exports = studentRouter;