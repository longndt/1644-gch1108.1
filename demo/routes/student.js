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
   res.redirect('/student');
})

router.get('/deleteall', async (req, res) => {
   //SQL: DELETE FROM students
   //SQL: TRUNCATE TABLE students
   await StudentModel.deleteMany();
   res.redirect('/student');
})

//step 1: render "Add student" form for user to input data
router.get('/add', (req, res) => {
   res.render('student/add');
})

//step 2: get input data from form and add data to database
router.post('/add', async (req, res) => {
   //get input data from form
   var student = req.body;
   //add data to database
   await StudentModel.create(student);
   //redirect to student homepage
   res.redirect('/student');
})

module.exports = router;
