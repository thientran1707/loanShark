var express = require('express');
var router = express.Router();
var RCSDK = require('rcsdk');
var passport = require('passport');
var User = require('../models/User');

var rcsdk = new RCSDK({
    server: 'https://platform.devtest.ringcentral.com',
    appKey: 'aeH2qRyGQSCoA7-dcKNKYw',
    appSecret: 'kOM0c8fMQI6Fks2Bnx0QgA4tzDYW2FTlmp2HCgeP7jdw'
});
var platform = rcsdk.getPlatform();

router.post('/login', passport.authenticate('local', {successRedirect: '/login', failureRedirect: '/failure'}), function(req, res, next) {
  res.end();
});

router.post('/signup', function(req, res, next) {
  User.findOne({userName: req.body.username}, function(err, user) {
    if (user) {
      console.log('This user already exists!');
    } else {
      var newUser = User({
        userName: req.body.username,
        password: req.body.password,
      });

      newUser.save(function(err) {
        if (err) {
          throw err;
        }
        console.log('User created!');
        res.end();
      });
    }
  });
});

router.get('/login', function(req, res, next) {
  console.log('we are going to login now');
  platform.authorize({
      username: '18024486659',
      extension: '',
      password: 'hack123#'
  }).then(function(response) {
      console.log('login successful');
      res.redirect('/#/app/transactions');
  }).catch(function(e) {
      console.log('having an issue logging in ', e);
      alert(e.message  || 'Server cannot authorize user');
  });
});

router.post('/sendMessage', function(req, res, next) {
  console.log('trying to send this message ', req.body);
  platform.post('/account/~/extension/~/sms', {
      body: {
        from: {phoneNumber:'+18024486659'}, // Your sms-enabled phone number
        to: [
            {phoneNumber: req.body.number} // Second party's phone number
        ],
        text: req.body.content
      }
  }).then(function(response) {
      alert('Success: ' + response.data.id);
      response.end('hi!');
  }).catch(function(e) {
      alert('Error: ' + e.message);
      response.end('error is ', e);
  });
});

module.exports = router;
