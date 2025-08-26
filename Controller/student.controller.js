const studentmodel = require('../Model/studentmodel');

async function createStudent(req, res) {
    try {
        console.log(req.body)
        const { name, rollnumber } = req.body;

        const newStudent = new studentmodel({ name, rollnumber });

        await newStudent.save();

        res.status(200).json({
            message: 'Student created successfully',
            student: newStudent
        });

    } catch (error) {

        console.error(error);
        res.status(500).json({ message: 'Failed to  create student', error: error.message });
    }
}

async function getStudent(req, res) {

    try {

        const students = await studentmodel.find();
        // console.log(students);
        res.status(200).json({ response: students });

    }
    catch (error) {

        res.status(500).json({ message: 'Failed to fetch student', error: error.message });
    }
}

async function deleteStudent(req, res) {

    try {
        // console.log(req.params.id);
        const { id } = req.params;

        const studentData = await studentmodel.findByIdAndDelete(id);

        if (!studentData) {
            return res.status(404).json({
                message: "Student not found",
                success: false
            });

        }
        res.send({
            message: "Data delete",
            success: true,
            info: studentData
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Error delete student",
            error: err
        })
    }

}

async function updateStudent(req, res) {

   
    try {
    const { id } = req.params; 
    const { name, rollnumber } = req.body; 

    const updatedStudent = await studentmodel.findByIdAndUpdate(
      id,
      { name, rollnumber },
      { new: true }
    );
          if (!updateStudent) {
            return res.status(404).send({
                message: "Student not found",
                success: false
            });
        }
         res.send({
            message: "Data updated",
            success: true,
            info: updateStudent
        });

    }
  
    catch(error){
        res.status(500).send({
            message:"Failed to update student",
            error:error.message
        });
    }
   

    
}
module.exports = { createStudent, getStudent, deleteStudent, updateStudent };


