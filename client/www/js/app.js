// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'ionic-timepicker']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
          controller: "ProfileCtrl"
        }
      }
    })

  .state('app.transactions', {
    url: '/transactions?type=:borrowerType',
    views: {
      'menuContent': {
        templateUrl: 'templates/transactions.html',
        controller: 'TransactionsCtrl'
      }
    }
  })

    .state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'templates/register.html',
          controller: 'RegisterCtrl'
        }
      }
    })

    .state('app.home', {
      url: '/',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })      

    .state('app.friends', {
      url: '/friends',
      views: {
        'menuContent': {
          templateUrl: 'templates/friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/transactions/:transactionItem',
    views: {
      'menuContent': {
        templateUrl: 'templates/transaction.html',
        controller: 'TransactionCtrl'
      }
    }
  })

  .state('app.group', {
    url: '/transactions/group/:transactionItem',
    views: {
      'menuContent': {
        templateUrl: 'templates/transactionGroup.html',
        controller: 'TransactionGroupCtrl'
      }
    }
  })

  .state('app.add_transaction', {
    url: '/transactions/add?type=:borrowerType',
    views: {
      'menuContent': {
        templateUrl: 'templates/add_transaction.html',
        controller: "AddTransactionCtrl"
      }
    }
  })

  .state('app.items', {
    url: '/items',
    views: {
      'menuContent': {
        templateUrl: 'templates/items.html',
        controller: 'ItemsCtrl'
      }
    }
  })    

  .state('app.new_item', {
    url: '/items/new',
    views: {
      'menuContent': {
        templateUrl: 'templates/new_item.html',
        controller: 'NewItemCtrl'
      }
    }
  })      

  .state('app.message', {
    url: '/message/:friendId?itemId=:itemName',
    views: {
      'menuContent': {
        templateUrl: 'templates/message.html',
        controller: 'MessageCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/');
});
