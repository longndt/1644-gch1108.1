//declare mongoose
var mongoose = require('mongoose');
//declare schema (table design/structure)
var StudentSchema = mongoose.Schema(
   {
      id: String,
      name: String,
      birthYear: Number,   //integer
      gender: String,
      gpa: Number,         //double
      image: String,
      birthPlace: String
   }
);
//declare model (to be used in routes - controllers)
var StudentModel = mongoose.model("students", StudentSchema);  //students: collection name
//Note: in case collection name is single form (without "s" at the end)
//var StudentModel = mongoose.model("student", StudentSchema, "student");
//export module
module.exports = StudentModel;