const student_data_model = require('../Model/student_data_model');


async function createsubject(req, res) {

    try {
        console.log(req.body)
        const { subject, marks, studentId } = req.body;

        const newSubject = new student_data_model({ subject, marks, student:studentId });

        await newSubject.save();


        res.status(200).json({
            message: 'Subject  created successfully',
            subject: newSubject
        });
    }
    catch (error) {

        console.error(error);
        res.status(500).json({ message: 'Failed to create student', error: error.message });
    }

}

module.exports = { createsubject };