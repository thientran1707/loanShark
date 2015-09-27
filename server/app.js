var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/User');
var cors = require("cors");
var routes = require('./routes/index');
var users = require('./routes/users');
var task = require('./jobs/task.js');

var db = require('./models');
var Controllers = require('./controllers');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/bower_components',  express.static(__dirname + '/../bower_components'));
app.use(express.static(path.join(__dirname, '/../client/www')));

console.log('Start connecting to database!');
db.start();

/* User */
app.get('/api/users', Controllers.User.retrieve);
app.get('/api/users/:id', Controllers.User.get);
app.get('/api/users/getBorrowers/:id', Controllers.User.getBorrowers);
app.get('/api/users/getLenders/:id', Controllers.User.getLenders);
app.post('/api/users', Controllers.User.create);
app.put('/api/users/:id', Controllers.User.update) ;
app.delete('/api/users/:id', Controllers.User.delete);
  
/* Items */
app.get('/api/items', Controllers.Item.retrieve);
app.post('/api/items', Controllers.Item.create);
app.get('/api/items/:id', Controllers.Item.get);
app.put('/api/items/:id', Controllers.Item.update);
app.delete('/api/items/:id', Controllers.Item.delete);

/* Loans */
app.get('/api/loans', Controllers.Loan.retrieve);
app.post('/api/loans', Controllers.Loan.create);
app.get('/api/loans/:id', Controllers.Loan.get);
app.put('/api/loans/:id', Controllers.Loan.update);
app.delete('/api/loans/:id', Controllers.Loan.delete);
//console.log(task.sendMessage)
/* Send message to remind */
//setInterval(1000 * 60, task.sendMessage);
setInterval(task.sendMessage, 1000 * 60);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/users', users);

passport.serializeUser(function(user, done) {
  console.log('serializing user');
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('deserializing user');
  done(null, user);
});

passport.use(new LocalStrategy(function(username, password, done) {
  console.log('hello, passport', username, password);
  process.nextTick(function() {
    User.findOne({userName: username}, function(err, user) {
      console.log('user data is ', user);
      if (!user) {
        console.log('This user doesn\'t exist!');
        return done(err);
      } else {
        if (user.password !== password) {
          console.log('Authentication failed, wrong password');
          return done(err);
        } else {
          console.log('Authentication success!');
          console.log(done);
          return done(err, user);
        }
      }
    });
  });
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json(err);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json(err);
});


module.exports = app;
