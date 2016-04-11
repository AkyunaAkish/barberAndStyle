require('dotenv').load();
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/test', function(req,res,next){
  res.status(200).json({test:'Test'});
});


router.post('/send_email', function(req,res,next){

  res.status(200).json(req.body)

  // create reusable transporter object using the default SMTP transport
  // var transporter = nodemailer.createTransport({
  //   service: 'AOL',
  //   auth: {
  //     user: process.env.EMAIL, // Your email id
  //     pass: process.env.PASS // Your password
  //   }
  // });
  //
  // // setup e-mail data with unicode symbols
  // var mailOptions = {
  //   from: req.body.senderEmail, // sender address
  //   to: process.env.EMAIL, // list of receivers
  //   subject: "From: " + req.body.senderName + ": \n" + req.body.emailSubject, // Subject line
  //   text: req.body.emailMessage, // plaintext body
  // };
  //
  // // send mail with defined transport object
  // transporter.sendMail(mailOptions, function(error, info){
  //   if(error){
  //     console.log('err ', error);
  //     res.json('Server error: ', error);
  //   } else {
  //     console.log('good res ', info.response);
  //     res.json('Message sent: ' + info.response);
  //   }
  // });

});

module.exports = router;
