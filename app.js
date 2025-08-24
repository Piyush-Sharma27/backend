
const express = require('express');
const cors = require('cors');
const studentmodel = require('./Model/studentmodel');
const student_data_model = require('./Model/student_data_model');
const app = express();



app.use(express.json());
app.use(cors({

    origin:'http://localhost:3000',
    methods:['GET','POST','PUT'],
    allowedHeaders:['Content-Type']     
}));

// Middleware



// Routes 
console.log("in")
async function piyush(params) {
    console.log("here");
}
app.use("/api/students", require("./Routes/student.routes"));

app.use("/api/subjects",require("./Routes/student_data_routes"));


module.exports=app;





