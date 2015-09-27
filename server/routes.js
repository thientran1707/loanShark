/**
 * Main application routes
 */

'use strict';
var Controllers = require('./Controllers');

module.exports = function(app) {

  // Routing for the server
  /* User */
  app.get('/api/users', Controllers.User.retrieve);
  app.get('/api/users/:id', Controllers.User.get);
  app.post('/api/users', Controllers.User.create);
  //app.post('/api/users/login');
  //app.post('/api/users/logout');
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


  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};