// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = require("./app");

// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
// .then(() => {
//     console.log("MongoDB Connected");
// })
// .catch((err) => {
//     console.log(err);
// });

// const students = [];


// /* GET ALL STUDENTS */

// app.get("/students", (req, res) => {

//     res.status(200).json(students);

// });


// /* CREATE STUDENT */

// app.post("/students", (req, res) => {

//     const { name, age, email } = req.body || {};

//     if (!name || age === undefined || !email) {

//         return res.status(400).json({
//             message: "Name, age and email are required"
//         });

//     }

//     const student = {

//         id: Date.now(),

//         name,

//         age,

//         email

//     };

//     students.push(student);

//     res.status(201).json(student);

// });


// /* GET STUDENT BY ID */

// app.get("/students/:id", (req, res) => {

//     const student = students.find(

//         s => s.id === Number(req.params.id)

//     );

//     if (!student) {

//         return res.status(404).json({

//             message: "Student not found"

//         });

//     }

//     res.status(200).json(student);

// });


// /* PUT - REPLACE ENTIRE STUDENT */

// app.put("/students/:id", (req, res) => {

//     const student = students.find(

//         s => s.id === Number(req.params.id)

//     );

//     if (!student) {

//         return res.status(404).json({

//             message: "Student not found"

//         });

//     }

//     const { name, age, email } = req.body || {};

//     if (!name || age === undefined || !email) {

//         return res.status(400).json({

//             message: "Name, age and email are required"

//         });

//     }

//     student.name = name;
//     student.age = age;
//     student.email = email;

//     res.status(200).json(student);

// });


// /* PATCH - PARTIAL UPDATE */

// app.patch("/students/:id", (req, res) => {

//     const student = students.find(

//         s => s.id === Number(req.params.id)

//     );

//     if (!student) {

//         return res.status(404).json({

//             message: "Student not found"

//         });

//     }

//     if (req.body.name !== undefined) {

//         student.name = req.body.name;

//     }

//     if (req.body.age !== undefined) {

//         student.age = req.body.age;

//     }

//     if (req.body.email !== undefined) {

//         student.email = req.body.email;

//     }

//     res.status(200).json(student);

// });


// /* DELETE STUDENT */

// app.delete("/students/:id", (req, res) => {

//     const index = students.findIndex(

//         s => s.id === Number(req.params.id)

//     );

//     if (index === -1) {

//         return res.status(404).json({

//             message: "Student not found"

//         });

//     }

//     students.splice(index, 1);

//     res.status(204).send();

// });


// app.listen(process.env.PORT || 3000, () => {

//     console.log(

//         `Server running on port ${process.env.PORT || 3000}`

//     );

// });
// 
// 

require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();

app.listen(process.env.PORT || 3000, () => {

    console.log(
        `Server running on port ${process.env.PORT || 3000}`
    );

});