// const express = require("express");

// const router = express.Router();

// const Student = require("../models/Student");


// router.post("/", async(req,res)=>{

// try{

// const student = await Student.create(

// req.body

// );

// res.status(201).json(student);

// }

// catch(error){

// res.status(500).json({

// message:error.message

// });

// }

// });

// router.get("/", async(req,res)=>{

// try{

// const students = await Student.find();

// res.status(200).json(

// students

// );

// }

// catch(error){

// res.status(500).json({

// message:error.message

// });

// }

// });

// router.get("/:id", async(req,res)=>{

// try{

// const student = await Student.findById(

// req.params.id

// );

// if(!student){

// return res.status(404).json({

// message:"Student not found"

// });

// }

// res.json(student);

// }

// catch(error){

// res.status(500).json({

// message:error.message

// });

// }

// });

// router.put("/:id", async(req,res)=>{

// try{

// const student = await Student.findByIdAndUpdate(

// req.params.id,

// req.body,

// {new:true}

// );

// res.status(200).json(student);

// }

// catch(error){

// res.status(500).json({

// message:error.message

// });

// }

// });

// router.patch("/:id", async(req,res)=>{

// try{

// const student = await Student.findByIdAndUpdate(

// req.params.id,

// req.body,

// {new:true}

// );

// res.json(student);

// }

// catch(error){

// res.status(500).json({

// message:error.message

// });

// }

// });

// router.delete("/:id", async(req,res)=>{

// try{

// await Student.findByIdAndDelete(

// req.params.id

// );

// res.status(204).send();

// }

// catch(error){

// res.status(500).json({

// message:error.message

// });

// }

// });

// module.exports = router;
// 

const express = require("express");

const router = express.Router();

const students = [];


/* GET ALL */

router.get("/", (req, res) => {

    res.status(200).json(students);

});


/* CREATE */

router.post("/", (req, res) => {

    const { name, age, email } = req.body || {};

    if (!name || age === undefined || !email) {

        return res.status(400).json({

            message: "Name, age and email are required"

        });

    }

    const student = {

        id: Date.now(),

        name,

        age,

        email

    };

    students.push(student);

    res.status(201).json(student);

});


/* GET BY ID */

router.get("/:id", (req, res) => {

    const student = students.find(

        s => s.id === Number(req.params.id)

    );

    if (!student) {

        return res.status(404).json({

            message: "Student not found"

        });

    }

    res.status(200).json(student);

});


/* PUT */

router.put("/:id", (req, res) => {

    const student = students.find(

        s => s.id === Number(req.params.id)

    );

    if (!student) {

        return res.status(404).json({

            message: "Student not found"

        });

    }

    const { name, age, email } = req.body || {};

    student.name = name;
    student.age = age;
    student.email = email;

    res.status(200).json(student);

});


/* PATCH */

router.patch("/:id", (req, res) => {

    const student = students.find(

        s => s.id === Number(req.params.id)

    );

    if (!student) {

        return res.status(404).json({

            message: "Student not found"

        });

    }

    if (req.body.name !== undefined) {

        student.name = req.body.name;

    }

    if (req.body.age !== undefined) {

        student.age = req.body.age;

    }

    if (req.body.email !== undefined) {

        student.email = req.body.email;

    }

    res.status(200).json(student);

});


/* DELETE */

router.delete("/:id", (req, res) => {

    const index = students.findIndex(

        s => s.id === Number(req.params.id)

    );

    if (index === -1) {

        return res.status(404).json({

            message: "Student not found"

        });

    }

    students.splice(index, 1);

    res.status(204).send();

});

module.exports = router;