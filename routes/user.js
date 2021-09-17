const express = require('express')
const router = express.Router()
const Validation = require('@validation/userValidation')
const Responder = require('@service/response')
const {signUp, login} = require('@controllers/Auth')

router.post('/signup',
    Validation.signUp(),
    Responder.validate.bind(Responder),
    signUp
);
router.post('/login',
    Validation.login(),
    Responder.validate.bind(Responder),
    login
);
// router.post('/login-otp',
//     Validation.OTPLogin(),
//     Responder.validate.bind(Responder),
// );

module.exports = router