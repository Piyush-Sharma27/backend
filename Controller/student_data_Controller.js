const student_data_model = require('../Model/student_data_model');
const studentmodel = require('../Model/studentmodel');


async function createsubject(req, res) {

    try {

        const { subject, marks, studentId } = req.body;

        if (!studentId) {
            return res.status(400).json({ message: "StudentId is required" });
        }


        const newSubject = new student_data_model({
            subject,
            marks,
            student: studentId
        });

        await newSubject.save();

        res.status(200).json({
            message: 'Subject created successfully',
            subject: newSubject
        });
    }
    catch (error) {

        console.error(error);
        res.status(500);
        res.status(500).json({ message: 'Failed to created subject', error: error.message });
    }

}

// async function getstudentdata(req, res) {
//     try {
//         const studentsdata = await student_data_model.find()
//             .populate("student", "name rollnumber");
//         res.status(200).json({ response: studentsdata });
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to fetch student', error: error.message });
//     }
// }


// doing with the Aggregate

// async function getstudentdata(req, res) {
//     try {
//         const studentsdata = await student_data_model.aggregate([
//             {

//                 $lookup:{
//                     from:"studentmodels",
//                      localField: "student",
//                      foreignField: "_id",
//                       as: "studentInfo"
//                 }

//             },

//                 {
//         $unwind: {
//           path: "$studentInfo",
//           preserveNullAndEmptyArrays: true
//         }
//             }
//         ]);

//         res.status(200).json({ response: studentsdata }); 
//         catch (error) {
//         res.status(500).json({ message: 'Failed to fetch student', error: error.message });
//     }
//     }
// }

async function getstudentdata(req, res) {
    try {
        const studentsdata = await student_data_model.aggregate([
            {
                $lookup: {
                    from: "studentmodels",   
                    localField: "student",
                    foreignField: "_id",
                    as: "studentInfo"
                }
            },
            {
                $unwind: {
                    path: "$studentInfo",
                    preserveNullAndEmptyArrays: true
                }
            }
        ]);

        res.status(200).json({ response: studentsdata }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch student', error: error.message });
    }
}

module.exports = { createsubject, getstudentdata };




module.exports = { createsubject, getstudentdata };