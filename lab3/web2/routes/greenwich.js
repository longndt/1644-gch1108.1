var express = require('express');
var router = express.Router();

//url: localhost:3000/greenwich/intro
router.get('/intro', (req, res) => {
   res.send("Greenwich homepage");
})

module.exports = router;