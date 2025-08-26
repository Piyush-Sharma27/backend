const express = require("express");
const router = express.Router();
const StudentController = require("../Controller/student_data_controller");
const student_data_model = require("../Model/student_data_model");



router.post('/create', StudentController.createsubject)
   .get('/', StudentController.getstudentdata);



module.exports = router;





