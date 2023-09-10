const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contactConstoller')

router.get('/', contactController.contact)

module.exports = router