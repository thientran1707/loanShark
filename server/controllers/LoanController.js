'use strict';

var Loan = require('../models/Loan');
var LoanController = {};

LoanController.retrieve = function(req, res) {
  Loan.find({}, function(err, loan) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(loan);
    }
  });
};

LoanController.create = function(req, res) {
  var item = req.body.item;
  var owner = req.body.owner;
  var borrower = req.body.borrower;
  var borrowDate = new Date();
  var dueDate = req.body.dueDate;

  var loan = new Loan({
    item: item,
    owner: owner,
    borrower: borrower,
    borrowDate: borrowDate,
    dueDate: dueDate
  });
  console.log('Loan is: ', loan);

  loan.save(function(err, loan) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(loan);
    }
  });
};

LoanController.get = function(req, res) {
  var id = req.params.id;
  Loan.findById(id, function(err, loan) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(loan);
    }
  });
};

LoanController.update = function(req, res) {

  var item = req.body.item;
  var owner = req.body.owner;
  var borrower = req.body.borrower;
  var borrowDate = req.body.borrowDate;
  var dueDate = req.body.dueDate;

  Loan.findById(id, function(err, loan) {
  	if (err) {
      res.status(500).json(err);
    } else {
      loan.update({
        item: item,
        owner: owner,
        borrower: borrower,
        borrowDate: borrowDate,
        dueDate: dueDate
  	  }, function(err, loan) {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json(loan);
          }
      });
    }
  });
};

LoanController.delete = function(req, res) {
  var id = req.params.id;

  Loan.findById(id, function(loan) {
  	loan.remove(function(loan) {
  	  res.status(200).json(loan);
  	}, function(err) {
      res.status(500).json(err);
    });
  }, function(err) {
    res.status(500).json(err);
  });
};

module.exports = LoanController;