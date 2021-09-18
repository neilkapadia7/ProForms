const express = require('express')
const router = express.Router()
const formAmdminRoutes = require('@routes/forms/formAdmin')
const formUserRoutes = require('@routes/forms/formUser')

router.use('/admin', formAmdminRoutes);
router.use('/user', formUserRoutes);

module.exports = router