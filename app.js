var express = require('express');
var nodeMailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();
var routes = require ('./routes');
app.set('view engine', 'ejs');

var path = require('path');
app.use (express.static('public'));

var credentials = {
    user: 'alimorteza.panju@gmail.com',
    pass: 'gufour123'
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Email logic
app.post('/submit', function (req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: credentials,
    });
    let mailOptions = {
        from: '"Ali Morteza Panju" <alimorteza.panju@gmail.com>', // sender address
        to: 'sarfaraaz.kara@gmail.com', // list of receivers
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

// coming-soon-default
app.get('/', routes.comingSoon);

// notFound
app.get('*', routes.notFound);

app.listen(process.env.PORT || 9000, function() {
    console.log('The magic happens on localhost 9000');
});