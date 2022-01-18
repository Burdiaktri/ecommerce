const { Router } = require("express")
const {getIndex, getSignUp, postSignUp, getProfile, getSignIn, postSignIn} = require ("../controllers/index.js")
const indexRouter = Router()
const passport = require('passport')

indexRouter
    .get('/', getIndex)
    .get('/signup', getSignUp)
    .get('/profile', getProfile)
    .get('/signin', getSignIn)
    .post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        passReqToCallback: true
    }), postSignUp)
    .post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/profile',
        failureRedirect: '/signip',
        passReqToCallback: true
    }), postSignIn)
    
module.exports = indexRouter