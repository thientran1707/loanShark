var Loan = require('../models/Loan');
var User = require('../models/User');
var request = require('superagent');
var coreUrl = 'localhost:3000';
var Task = {};

Task.sendMessage = function() {
  var now = new Date();
  var reminderDate = new Date(now.getTime() - 1000*60*60*24);
  
  Loan.find({dueDate: {$gt: now}}, function(err, loans) {

    for (var i = 0; i < loans.length; i++) {
    	
      var borrowerId = loans[i].borrower;
      User.findById(borrowerId, function(err, borrower) {
      	var phone = borrower.phone;
      	var text = 'Please return item to ' + borrower.userName;
      	superagent.get(coreUrl + 'users/login')
      	  .end(function(err, res) {
      	  	superagent.post(coreUrl + 'users/sendMessage')
      	  	  .send({
      	  	    number: phone,
      	  	    text: text
      	  	  })
      	  	  .end(function(err, res) {
      	  	  	if (err) {
      	  	  		res.status(400).json(err);
      	  	  	} else {
      	  	  		res.status(400).json(res);
      	  	  	}
      	  	  });
      	  });
      });
    }
  });
};

module.exports = Task;