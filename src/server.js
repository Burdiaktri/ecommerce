const express = require ('express')
const carritoRouter = require ('../src/routes/carritoroutes.js')
const productoRouter = require ('../src/routes/productoroutes.js')
const indexRouter = require ('./routes/index.js')
const errorHandlerMiddleware = require('./middlewares/errorHandler.js')
const morgan = require ('morgan')
const engine = require ('ejs-mate')
const path = require ('path')
const passport = require('passport')
const session = require('express-session')
const flash = require('connect-flash')
const dotenv = require('dotenv').config()
require('./database/db.js') 
require('./passport/local-auth')

const app = express()

//settings
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine)
app.set('view engine', 'ejs')



//middlewares
app.use(errorHandlerMiddleware)
app.use(morgan('dev'))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use((req, res, next) => {
    app.locals.signUpMessage = req.flash('signUpMessage')
    app.locals.signInMessage = req.flash('signInMessage')
    app.locals.user = req.user
    next()
})

//routes

app.use("/productos", productoRouter)
app.use("/carrito", carritoRouter)
app.use("/", indexRouter)
 
module.exports = app