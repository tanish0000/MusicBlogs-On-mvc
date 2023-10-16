var express = require('express');
var router = express.Router();
var ctrlUSER = require('../controllers/Users');


router.post('/signup/', ctrlUSER.userCreate);
router.get('/signup/:signid',ctrlUSER.userReadOne);
router.put('/signup/',ctrlUSER.userUpdateOne);
router.delete('/signup/:signid',ctrlUSER.userDeleteOne);

module.exports = router;