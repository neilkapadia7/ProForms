const express = require('express')
const router = express.Router()
const formAmdminRoutes = require('@routes/forms/formAdmin')
const formUserRoutes = require('@routes/forms/formUser')

router.post('/admin', formAmdminRoutes);
router.post('/user', formUserRoutes);

module.exports = router