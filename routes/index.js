const express = require('express')
const router = express.Router()

router.post('/addUser', (req, res) => {
    res.json({message: 'Hey! Welcome to ProForms'})
})

module.exports = router