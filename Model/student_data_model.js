const mongoose = require('mongoose');

const studentDataSchema = new mongoose.Schema({
    subject: { type: String,  },
    marks: { type: Number },
    

    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"studentmodel",
        required:true
    }
    

});

module.exports = mongoose.model("student_data_model", studentDataSchema);


