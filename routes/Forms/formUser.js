const express = require('express')
const router = express.Router()
const Validation = require('@validation/formValidation')
const Auth = require('@middleware/Auth')
const Responder = require('@service/response')
const {submitForm, getForm} = require('@controllers/FormUser')

// api/forms/user

router.post('/submit', 
    Auth,
    Validation.submitForm(),
    Responder.validate.bind(Responder),
    submitForm
)

router.post('/submit-unauth', 
    Validation.submitForm(),
    Responder.validate.bind(Responder),
    submitForm
)


router.get('/form/:id', 
    // Auth,
    getForm
)

module.exports = router

module.exports = router