var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

//READ feature
//Importance: Must use "async" + await" keywords
router.get('/', async (req, res) => {
   //SQL: SELECT * FROM students
   var studentList = await StudentModel.find({});
   console.log(studentList);
   res.render('student/index', { studentList });
});

//DELETE feature
router.get('/delete/:id', async (req, res) => {
   //get id from url
   let id = req.params.id;
   //delete document in collection by id
   //SQL: DELETE FROM students WHERE id = "id"
   await StudentModel.findByIdAndDelete(id);
   //console.log("Delete student succeed !");
   //redirect to student list page
   res.redirect('/');
})

router.get('/deleteall', async (req, res) => {
   //SQL: DELETE FROM students
   //SQL: TRUNCATE TABLE students
   await StudentModel.deleteMany();
   res.redirect('/');
})

module.exports = router;
