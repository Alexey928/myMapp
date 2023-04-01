const Router = require('express');
const router = new Router();
const userController = require('../Controllers/userController');
const authMidelware  = require('../Midelware/authMidelwere');




router.post('/registration',userController.registration);
router.post('/login',userController.login);
router.get('/auth', authMidelware,userController.chekc);