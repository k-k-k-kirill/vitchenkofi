//Dotenv configuration
require("dotenv").config();

const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const cors = require('cors')
var history = require('connect-history-api-fallback')
const mailer = require('./mailer')

const app = express()

app.use(history({
    verbose: true
}))


var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.post('/mailer', cors(corsOptions), (req, res) => {
    try {
        const msg = {
            to: 'vitchenko.kirill@gmail.com',
            from: 'vitchenko.kirill@gmail.com',
            subject: 'Sending with Twilio SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
          };
        await mailer.send(msg);
        res.status(200).json({
            message: "Your message has been forwarded to Kirill. Thanks for contacting!",
        });
    } catch(err) {
        res.status(500).json({
            status: 500,
            message: "Could not send your message. Please, try again later.",
        });
    }
})

const sendMail = async () => {

}

sendMail()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)