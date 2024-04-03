const express = require('express');
const router = express.Router();
const ModuleModel = require('../models/ModuleModel');

//url: localhost:3000/module
router.get('/', async (req, res) => {
   let modules = await ModuleModel.find({});
   res.send(modules);
})

module.exports = router;