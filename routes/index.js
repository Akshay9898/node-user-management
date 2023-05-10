const express = require('express')
const router = express.Router()
const controllers  = require('../controllers/userControllerCookie')
const {signUp,loginAuth} = controllers
const authMiddleware = require('../middlewares/authMiddleware')
const sessionControllers = require('../controllers/userControllerSession')
const {signUpSession,loginAuthSession} = sessionControllers

// Routes for Cookie Auth
router.post('/signup', authMiddleware, signUp)
router.post('/login', loginAuth)

// Routes for Session Auth
router.post('/signupuser', signUpSession)
router.post('/loginuser',loginAuthSession)


module.exports = router