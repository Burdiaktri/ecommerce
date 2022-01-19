const twilio = require('twilio')
const dotenv = require('dotenv').config()

const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN

const client = twilio(accountSid, authToken)

const options = {
    body: 'Nuevo pedido!',
    mediaUrl: [ 'https://www.investingmoney.biz/public/img/art/xl/18012019161021Twilio-IoT.jpg' ],
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+5493513932564'
 }
 
 module.exports = {options, client}