const express = require("express");
const router = express.Router();
const StudentController = require("../Controller/student.controller");


router.post("/create", StudentController.createStudent)
.get("/",StudentController.getStudent)
.put("/:id",StudentController.deleteStudent)
.put("/update/:id",StudentController.updateStudent);


module.exports = router;












