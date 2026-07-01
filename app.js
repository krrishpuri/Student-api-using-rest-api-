const express = require("express");

const studentRoutes = require(

"./routes/studentRoutes"

);

const errorHandler = require(

"./middleware/errorMiddleware"

);

const app = express();

app.use(express.json());

app.use(

"/students",

studentRoutes

);

app.use(errorHandler);

module.exports = app;