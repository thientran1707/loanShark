'use strict';

var User = require('../models/User');
var UserController = {};

UserController.retrieve = function(req, res) {
  User.find({})
    .then(function(err, users) {
      if (err) {
      	res.status(500).json(err);
      } else {
      	res.status(200).json(users);
      }
    });  
};

UserController.create = function(req, res) {
  //var firstName = req.body.firstName;
  //var lastName = req.body.lastName;
  var userName = req.body.userName;
  var password = req.body.password;
  var phone = req.body.phone;
  //var email = req.body.email;
  var items = req.body.items;
  var friends = req.body.friends;
  //var token = req.body.token; 

  var user = new User({
    //firstName: firstName,
    //lastName: lastName,
    userName: userName,
    password: password,
    phone: phone,
    //email: email,
    items: items,
    friends: friends
    //token: token
  });

  user.save(function(err) {
  	if (err) {
  	  res.status(500).json(err);
  	} else {
  	  res.status(200).json(user);
  	}
  });
};

UserController.get = function(req, res) {
  var id = req.params.id;
  User.findById(id, function(err, user) {
  	if (err) {
  	  res.status(500).json(err);
  	} else {
  	  res.status(200).json(user);
  	}
  });
};

UserController.update = function(req, res) {

  //var firstName = req.body.firstName;
  //var lastName = req.body.lastName;
  var userName = req.body.userName;
  var password = req.body.password;
  var phone = req.body.phone;
  //var email = req.body.email;
  var items = req.body.items;
  var friends = req.body.friends;
  //var token = req.body.token; 

  User.findById(id, function(err, user) {
  	if (err) {
      res.status(500).json(User);
  	} else {
  	  user.update({
        //firstName: firstName,
        //lastName: lastName,
        userName: userName,
        password: password,
        phone: phone,
        //email: email,
        items: items,
        friends: friends
        //token: token
  	  }, function(err, user) {
  	    if (err) {
  	  	  res.status(500).json(err);
  	    } else {
  	  	  res.status(200).json(user);
  	    }
  	  });
  	}
  });
};

UserController.delete = function(req, res) {
  var id = req.params.id;

  User.findById(id, function(err, user) {
  	if (err) {
  	  res.status(500).json(err);
  	} else {
  	  User.remove(function(err, user) {
  	  	if (err) {
  	  	  res.status(500).json(err);
  	  	} else {
  	  	  res.status(200).json({message: 'deleted', user});
  	  	}
  	  });
  	}
  });
};

module.exports = UserController;