'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Item = require('../models/Item');
var ItemController = {};

ItemController.retrieve = function(req, res) {
  Item.find({}, function(err, item) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(item);
    }
  }) 
};

ItemController.create = function(req, res) {
  var name = req.body.name;
  var description = req.body.description;

  var item = new Item({
  	name: name,
  	description: description
  });

  item.save(function(err, item) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(item);
    }
  });
};

ItemController.get = function(req, res) {
  var id = req.params.id;
  Item.findById(id, function(err, item) {
  	res.status(200).json(item);
  });
};

ItemController.update = function(req, res) {
  var id = req.params.id;
  var name = req.body.name;
  var description = req.body.description;

  Item.findById(id, function(err, item) {
    if (err) {
      res.status(500).json(err);
    } else {
  	  item.update({
        name: name,
        description: description
  	  }, function(err, item) {
        if (err) {
          res.status(500).json(err);
        } else {
  	      res.status(200).json(item);
        }
      });
    }
  });
};

ItemController.delete = function(req, res) {
  var id = req.params.id;

  Item.findById(id, function(err, item) {
    if (err) {
      res.status(500).json(res);
    } else {
  	  item.remove(function(err, item) {
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(200).json(item);
        }
      });
    }
  });
};

module.exports = ItemController;