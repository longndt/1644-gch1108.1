const express = require('express');
const router = express.Router();
const ModuleModel = require('../models/ModuleModel');

//url: localhost:3000/module
router.get('/', async (req, res) => {
   let modules = await ModuleModel.find({});
   res.send(modules);
})

//url: localhost:3000/module/"id"
router.get('/delete/:id', async (req, res) => {
   let id = req.params.id;
   //Method 1
   await ModuleModel.findByIdAndDelete(id);
   res.send("Delete module succeed !");

   //Method 2
   // let module = ModuleModel.findById(id);
   // await ModuleModel.deleteOne(module);
   // res.send("Delete module succeed !");
})

module.exports = router;