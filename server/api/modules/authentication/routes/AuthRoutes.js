const AuthController = require('../controllers/AuthControllers/loginController');
const InitializeLoginController = require('../controllers/AuthControllers/initializeLoginController');
const LoginConfirmController = require('../controllers/AuthControllers/loginConfirmController');
const PasswordController = require('../controllers/AuthControllers/passwordController');
const PasswordResetController = require('../controllers/AuthControllers/passwordResetController');
const express = require('express');
const router = express.Router();
const registerValidator = require('../../../../validators/register');

module.exports = (app) => {

    // set api to a static base route to diferentiate from application routes
    app.use('/api', router);
    
    router.route('/login/new/mail')
       .post(registerValidator.RegisterSchema, InitializeLoginController.initializeLoginAndSendMail);
    
    router.route('/login/confirm')
        .post(LoginConfirmController.confirmLogin);

    //  router.route('/login/create')
    //      .post(registerValidator.RegisterSchema, AuthController.createLogin);


    router.route('/login')
        .post(AuthController.LoginAction)

    router.route('/login/forgot')
        .post(PasswordController.passwordForgot)

    router.route('/login/resetPassword')
        .post(PasswordResetController.passwordReset)


};