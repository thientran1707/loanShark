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

router.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/failure'}), function(req, res, next) {
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
  platform.authorize({
      username: '18024486659',
      extension: '',
      password: 'hack123#'
  }).then(function(response) {
      console.log('login successful');
      res.end('login successful');
  }).catch(function(e) {
      alert(e.message  || 'Server cannot authorize user');
  });
});

/* Testing only */
/*router.get('/send-test', function(req, res, next) {
  platform.post('/account/~/extension/~/sms', {
      body: {
          from: {phoneNumber:'+18024486659'}, // Your sms-enabled phone number
          to: [
              {phoneNumber:'+14088240895'} // Second party's phone number
          ],
          text: 'Message content: test'
      }
  }).then(function(response) {
      alert('Success: ' + response.data.id);
  }).catch(function(e) {
      alert('Error: ' + e.message);
  });
});*/

module.exports = router;
