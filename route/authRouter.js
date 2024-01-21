const express = require('express')

const {home , getUser, signUp, logIn} = require('../controller/userController.js')
const router = express.Router()

// router.post('/register', register)
router.get('/getuser', getUser)
router.post('/api/auth/signup', signUp)
router.get('/', home)
router.get('/api/auth/login', logIn)

module.exports = router
