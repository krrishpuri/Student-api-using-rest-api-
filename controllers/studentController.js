const Student = require(

"../models/Student"

);

const asyncHandler = require(

"../utils/asyncHandler"

);

exports.createStudent = asyncHandler(

async(req,res)=>{

const student = await Student.create(

req.body

);

res.status(201)

.json(student);

}

);

exports.getStudents = asyncHandler(

async(req,res)=>{

const students = await Student.find();

res.status(200)

.json(students);

}

);

exports.getStudent = asyncHandler(

async(req,res)=>{

const student = await Student.findById(

req.params.id

);

if(!student){

res.status(404);

throw new Error(

"Student not found"

);

}

res.json(student);

}

);

exports.deleteStudent = asyncHandler(

async(req,res)=>{

await Student.findByIdAndDelete(

req.params.id

);

res.status(204).send();

}

);

exports.updateStudent = asyncHandler(

async(req,res)=>{

const student = await Student.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

);

res.json(student);

}

);