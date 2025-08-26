const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:3000/mongopractice');

const studentSchema = new mongoose.Schema({

   name: { type: String },       
  rollnumber: { type: Number, unique:true }   
});

 module.exports = mongoose.model("studentmodel", studentSchema);

 
