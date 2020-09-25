var express = require('express')
var router = express.Router()
const { signout, signup, signin, isSignedIn } = require('../controllers/auth')
const { check } = require('express-validator')

router.post('/signup',[
    check("name").isLength({ min: 3 }).withMessage('name must be at least 3 chars long'),
    check("email").isEmail().withMessage('enter a valid email'),
    check("password").isLength({ min: 5 }).withMessage('password must be at least 5 chars long'),
], signup)

router.post('/signin',[
    check("email").isEmail().withMessage('enter a valid email'),
    check("password").isLength({ min: 1 }).withMessage('password field is required'),
], signin)

router.get('/signout', signout)

router.get('/testroute',isSignedIn, (req,res)=>{
    res.json(req.auth)
})

module.exports = router;
