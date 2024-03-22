var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  let year = 2024;
  let university = "Greenwich";

  res.render('index', { year, university });
})

router.get('/demo', (req, res) => {
  res.render('demo', { hn: "Hà Nội", vn: "Việt Nam" });
})

router.get('/test', (req, res) => {
  let a = 5;
  let b = 3.14;
  let c = 'm';
  let d = true;
  let e = ["football", "badminton", "swimming"];

  res.render('test',
    {
      Integer: a,
      Double: b,
      Character: c,
      Boolean: d,
      sports: e,
      cities: ["Hanoi", "HCM", "Danang", "CanTho"]
    }
  );
})

module.exports = router;
