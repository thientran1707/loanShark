'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({
  item: {type: Schema.Types.ObjectId, required: true},
  owner: {type: Schema.Types.ObjectId, required: true},
  borrower: {type: Schema.Types.ObjectId, required: true},
  dueDate: {type: Date, required: true}
});

module.exports = mongoose.model('Loan', schema);