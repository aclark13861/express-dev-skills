var express = require('express');
var router = express.Router();
const dataCtrl = require('../controllers/index');

/* GET users listing. */
router.get('/skills', function(req, res, next) {
  res.render('index');
});
router.get('/new', dataCtrl.newSkill)
router.get('/:id', dataCtrl.show);
router.post('/', dataCtrl.create);
router.put('/:id', dataCtrl.update);


module.exports = router;
