//khai báo thư viện express
const express = require('express');
//khai báo router (định tuyến) => set path cho web
const router = express.Router();

//url: localhost:3000
router.get('/', (req, res) => {
  res.render('index');
})

//url: localhost:3000/hanoi
router.get('/hanoi', (req, res) => {
  res.render('greenwich/hn');
})

//url: localhost:3000/hochiminh
router.get('/hochiminh', (req, res) => {
  res.render('greenwich/hcm');
})

//url: localhost:3000/danang
router.get('/danang', (req, res) => {
  res.render('greenwich/dn');
})

//url: localhost:3000/cantho
router.get('/cantho', (req, res) => {
  res.render('greenwich/ct');
})

//export module => bắt buộc
module.exports = router;