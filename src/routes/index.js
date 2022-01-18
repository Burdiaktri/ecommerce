const { Router } = require("express")
const {getIndex, getSignUp, postSignUp, getProfile, getSignIn, postSignIn, getLogOut} = require ("../controllers/index.js")
const indexRouter = Router()
const passport = require('passport')
const isAuthenticated = require('../middlewares/isAuthenticated')

indexRouter
    .get('/', getIndex)
    .get('/signup', getSignUp)
    .get('/profile', isAuthenticated, getProfile)
    .get('/signin', getSignIn)
    .post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        passReqToCallback: true
    }), postSignUp)
    .post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        passReqToCallback: true
    }), postSignIn)
    .get('/logout', getLogOut)

module.exports = indexRouter