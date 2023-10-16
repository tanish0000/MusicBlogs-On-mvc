var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');
var ctrlSignup = require('../controllers/signup');
var ctrllogin = require('../controllers/Login');





router.get('/', ctrlMain.home);
router.get('/signup', ctrlSignup.sign);
router.get('/login', ctrllogin.login);
router.post("/auth/register",ctrlSignup.register);
router
module.exports = router;
