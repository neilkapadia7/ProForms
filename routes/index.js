const express = require('express')
const router = express.Router()
const userRoutes = require('@routes/user')
const formRoutes = require('@routes/forms/index')

router.use('/user', userRoutes)
router.use('/forms', formRoutes)

router.post('/addUser', (req, res) => {
    res.json({message: 'Hey! Welcome to ProForms'})
})

module.exports = router