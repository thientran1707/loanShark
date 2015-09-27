'use strict';

var User = require('../models/User');
var Loan = require('../models/Loan');
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
  var createdDate = new Date(); 

  var user = new User({
    userName: userName,
    password: password,
    phone: phone,
    items: items,
    friends: friends,
    createdDate: createdDate
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

UserController.getLenders = function(req, res) {
  var userId = req.params.id;

  Loan.find({borrower: userId}, function(err, loans) {

    if (err) {
      res.status(500).json(err);
    } else {
      var lenderIds = loans.map(function(loan) {
        return loan.owner;
      });

      User.find({_id: {$in: lenderIds}}, function(err, lenders){
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(200).json(lenders);
        }
      });
    }
  });
};

UserController.getBorrowItems = function(req, res) {
  var id = req.params.id;
  var borrowerId = req.params.borrowerId;

  Loan.find({owner: id, borrower: borrowerId}, function(err, loans) {
    var itemIds = loans.map(function(loan) {
      return loan.item;
    });

    Item.find({_id: {$in: itemIds}}, function(err, items) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(items);
      }
    });
  });
}

UserController.getBorrowers = function(req, res) {
  var userId =  req.params.id;

  Loan.find({owner: userId}, function(err, loans) {
    if (err) {
      res.status(500).json(err);
    } else {
      var borrowerIds = loans.map(function(loan) {
        return loan.borrower;
      });

      User.find({_id: {$in: borrowerIds}}, function(err, borrowers) {
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(200).json(borrowers);
        }
      });
    }
  });
};

module.exports = UserController;