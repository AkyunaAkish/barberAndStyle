require('dotenv').load();
var express = require('express');
var router = express.Router();
var sendgrid  = require('sendgrid')(process.env.API_KEY);


router.post('/sendEmail', function(req,res,next){

  var payload   = {
    to      : process.env.EMAIL,
    from    : req.body.senderEmail,
    subject : req.body.emailSubject,
    text    : "From: " + req.body.senderName +": \n"+ req.body.emailMessage
  }

  sendgrid.send(payload, function(err, json) {
    if (err) {
      console.error(err);
      res.status(503).json(err);
    } else {
      console.log(json);
      res.status(200).json(json);
    }  
  });

});


module.exports = router;
