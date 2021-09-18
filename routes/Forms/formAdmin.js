const express = require('express')
const router = express.Router()
const Validation = require('@validation/formValidation')
const Auth = require('@middleware/Auth')
const Responder = require('@service/response')
const {addForm, updateForm, removeForm} = require('@controllers/FormAdmin')

// api/forms/admin

router.post('/add', 
    Auth,
    Validation.addForm(),
    Responder.validate.bind(Responder),
    addForm
)

// router.post('/addUnAuth', 
//     Validation.addForm(),
//     Responder.validate.bind(Responder),
//     addForm
// )

router.post('/update/:id', 
    Auth,
    Validation.updateForm(),
    Responder.validate.bind(Responder),
    updateForm
)

router.post('/delete/:id', 
    Auth,
    removeForm
)

module.exports = router