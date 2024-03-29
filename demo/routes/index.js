var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

//READ feature
//Importance: Must use "async" + await" keywords
router.get('/', async (req, res) => {
  //SQL: SELECT * FROM students
  var studentList = await StudentModel.find({});
  //console.log(studentList);
  res.render('index', { studentList });
});

//DELETE feature

module.exports = router;
