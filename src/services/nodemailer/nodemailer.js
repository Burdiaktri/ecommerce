const {createTransport} = require('nodemailer')

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.TEST_MAIL,
        pass: process.env.TEST_PASS
    }
})

const mailOptions = {
    from: 'My ecommerce',
    to: process.env.TEST_MAIL,
    subject: 'Nuevo registro',
    html: ``
}

module.exports = {transporter, mailOptions}