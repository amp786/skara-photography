var express = require('express');
var nodeMailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();
var routes = require ('./routes');
app.set('view engine', 'ejs');

var path = require('path');
app.use (express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Email logic
app.post('/send-email', function (req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'alimorteza.panju@gmail.com',
            pass: 'gufour123'
        }
    });
    let mailOptions = {
        from: '"Ali Morteza Panju" <alimorteza.panju@gmail.com>', // sender address
        to: 'alimorteza.panju@gmail.com', // list of receivers
        subject: 'New subscriber to SKara Photography!', // Subject line
        html: 'Hi Sarfaraaz, you have a new subscriber: ' + req.body.subscriber, // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.render('pages/coming-soon/index.ejs', {
            title : 'Coming Soon | SKara Photography',
            });
        });
    });

// Routes

// home
app.get('/', routes.home);

// about
app.get('/about', routes.about);

// portfolio

// contact

// comingSoon
app.get('/coming-soon', routes.comingSoon);


// notFound
app.get('*', routes.notFound);

app.listen(process.env.PORT || 5000, function() {
    console.log('The magic happens on localhost 9000');
});