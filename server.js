//Dotenv configuration
require("dotenv").config();

const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
var history = require('connect-history-api-fallback')
const mailer = require('./mailer')

const app = express()

app.use(bodyParser.json())

app.use(history({
    verbose: true
}))

var corsOptions = {
    origin: ['https://vitchenkofi.herokuapp.com', 'https://vitchenko.fi']
}

app.use(cors(corsOptions))

app.post('/mailer', async (req, res) => {
    try {
        if ( req.body.email && req.body.message ) {
            const msg = {
                to: 'vitchenko.kirill@gmail.com',
                from: 'vitchenko.kirill@gmail.com',
                subject: 'Form submission on vitchenko.fi',
                text: 
                `Name: ${req.body.name} \nEmail: ${req.body.email}\nSubject: ${req.body.subject}\nMessage: ${req.body.message}`,
                html: `<p><strong>Name:  </strong>${req.body.name}</p>
                       <p><strong>Email:  </strong>${req.body.email}</p>
                       <p><strong>Subject:  </strong>${req.body.subject}</p>
                       <p><strong>Message:  </strong>${req.body.message}</p>`
            };
    
            await mailer.send(msg);
    
            res.status(200).json({
                message: "Your message has been forwarded to Kirill. Thanks for contacting!",
            });
        } else {
            res.status(404).json({
                message: "Please, provide enough details to put your message forward."
            })
        }

    } catch(err) {
        res.status(500).json({
            status: 500,
            message: "Could not send your message. Please, try again later.",
        });
    }
})

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 3000
app.listen(port)