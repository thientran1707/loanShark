'use strict';

var User = require('../models/User');
var UserController = {};

UserController.retrieve = function(req, res) {
  User.find({}, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(user);
    }
  })
};

UserController.create = function(req, res) {
  var userName = req.body.userName;
  var password = req.body.password;
  var phone = req.body.phone;
  var items = req.body.items;
  var friends = req.body.friends; 

  var user = new User({
    userName: userName,
    password: password,
    phone: phone,
    items: items,
    friends: friends
  });

  user.save(function(err, user) {
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

  var userName = req.body.userName;
  var password = req.body.password;
  var phone = req.body.phone;
  var items = req.body.items;
  var friends = req.body.friends; 

  User.findById(id, function(err, user) {
    if (err) {
      res.status(500).json(err);
    } else {
  	  user.update({
        userName: userName,
        password: password,
        phone: phone,
        items: items,
        friends: friends
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
  	  user.remove(function(err, user) {
        if (err) {
          res.status(500).json(err);
        } else {
  	      res.status(200).json(user);
        }
      });
    }
  });
};

module.exports = UserController;