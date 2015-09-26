var express = require('express');
var router = express.Router();
var RCSDK = require('rcsdk');

var rcsdk = new RCSDK({
    server: 'https://platform.devtest.ringcentral.com', // SANDBOX
    //server: 'https://platform.ringcentral.com', // PRODUCTION
    appKey: 'aeH2qRyGQSCoA7-dcKNKYw',
    appSecret: 'kOM0c8fMQI6Fks2Bnx0QgA4tzDYW2FTlmp2HCgeP7jdw'
});

var platform = rcsdk.getPlatform();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  platform.authorize({
      username: '18024486659', // phone number in full format
      extension: '', // leave blank if direct number is used
      password: 'hack123#'
  }).then(function(response) {
      console.log('login successful');
      res.end('login successful');
  }).catch(function(e) {
      alert(e.message  || 'Server cannot authorize user');
  });
});

router.get('/send-test', function(req, res, next) {
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
});

module.exports = router;
