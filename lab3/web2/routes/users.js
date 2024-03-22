var express = require('express');
var router = express.Router();

//url: localhost:3000/users/hanoi123
router.get('/hanoi123', (req, res) => {
  res.render('greenwich/hn');
})

module.exports = router;
