const passport = require('passport')


const getIndex = (req, res) => {
    try{
        res.render('index')
    }
    catch(err){
        console.log(err)
    }
   
}
const getSignUp = (req, res, next) => {
    res.render('signup')
}

const postSignUp = (req, res, next) => {
  
}

const getProfile = (req, res, next) => {
    res.render('profile')
}

const getSignIn = (req, res, next) => {
    res.render('signin')
}
const postSignIn = (req, res, next) => {
  
}

const getLogOut = (req, res, next) => {
    req.logout()
    res.redirect('/')
}
module.exports = {getIndex, getSignUp, postSignUp, getProfile, getSignIn, postSignIn, getLogOut}