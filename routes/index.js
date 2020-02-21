var express = require('express');
var router = express.Router();
const fakeDataModel = require('../data/fake-db');
const dataCtrl = require('../controllers/index');
// /* GET home page. */

router.get('/', dataCtrl.index);
router.get('/new', dataCtrl.newSkill);
router.get('/:id', dataCtrl.show);
router.post('/', dataCtrl.create);
router.delete('/:id', dataCtrl.deleteIt);
router.put('/:id', dataCtrl.update);

module.exports = router;
