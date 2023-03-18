const { Schema, model } = require("mongoose");

const studentScheme = new Schema({
    name:{type:String},
    mobile:{type:String},
    password:{type:String,required:true}
})

const Student = model('student',studentScheme);

module.exports = Student;