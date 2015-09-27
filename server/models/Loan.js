'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({
  item: {type: Schema.Types.ObjectId, required: true},
  owner: {type: Schema.Types.ObjectId, required: true},
  borrower: {type: Schema.Types.ObjectId, required: true},
  borrowDate: {type: Date, required: true},
  dueDate: {type: Date, required: true},
  lastReminderDate: {type: Date}
});

module.exports = mongoose.model('Loan', schema);