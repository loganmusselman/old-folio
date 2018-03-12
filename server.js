var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var httpServer = http.createServer(app);
var path = require('path');

var urlencodedParser = bodyParser.urlencoded({ extended: false})

const nodemailer = require('nodemailer');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
  res.sendFile(__dirname + "/" + 'index.html');
})

app.post('/', urlencodedParser, function(req, res){
  res.sendFile(__dirname + "/" + "index.html");
  console.log(req.body);
    nodemailer.createTestAccount((err, account) => {
//Set up email account that will be used
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, //use SSL
    auth: {
      user: 'loganmusselman@gmail.com',
      pass: 'R037ogan'
    }
  });

  transporter.verify(function(error, success){
    if(error){
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
    }
  })


//Set up to and from address to send/receive mail
  let mailOptions = {
    from: '"Portfolio Page" <loganmusselman@gmail.com>',
    to: 'loganmusselman@gmail.com',
    subject: 'Your form has been filled out!',
    text: 'text',
    html: 'First Name: ' + req.body.firstname +' <br/>' +
          'Last Name: ' + req.body.lastname + '<br/>' +
          'Email: ' + req.body.email + '<br/>' +
          'Phone: ' + req.body.phone + '<br/>' +
          'Message: ' + req.body.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);

    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });

});

})


var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listenting at http://%s:%s", host, port);
})