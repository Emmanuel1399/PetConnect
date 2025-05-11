const express = require('express')
const petRoutes = require('./pet.routes')
//const appointmenRoutes = require('./appointmen.routes')

const router = express.Router();

router.use('/pets', petRoutes)
//router.use('/appointments', appointmenRoutes)

module.exports = router;