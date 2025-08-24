const express = require("express");
const router = express.Router();
const StudentController = require("../Controller/student_data_Controller");



router.post('/create', StudentController.createsubject);
module.exports = router;



