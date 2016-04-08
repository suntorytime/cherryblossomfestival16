// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core','ngCordova', 'ionic.service.push', 'starter.controllers', 'starter.services', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // Adds push interface
    var io = Ionic.io();
        var push = new Ionic.Push({
          "onNotification": function(notification) {
            alert('Received notification!');
          },
          "pluginConfig": {
            "android": {
              "iconColor": "#0000FF"
            }
          }
        });
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// .config(["$ionicAppProvider", function($ionicAppProvider) {
//   $ionicAppProvider.identify({
//     app_id: 'aa15630f',
//     api_key:'22e62e8a1bbd5df036a3714b680d5a168cf8264e83390c4f',
//     dev_push: false
//   })
// }])
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.menu', {
    url: '/menu',
    views: {
      'tab-menu': {
        templateUrl: 'templates/tab-chats-menu.html',
        controller: 'ChatsMenuCtrl'
      }
    }
  })

  .state('tab.schedule1', {
        url: "/schedule1",
        views: {
          'tab-menu': {
            templateUrl: "templates/schedule1.html",
            controller: 'ChatsCtrl'
          }
        }
      })

  .state('tab.schedule2', {
        url: "/schedule2",
        views: {
          'tab-menu': {
            templateUrl: "templates/schedule2.html",
            controller: 'ChatsCtrl'
          }
        }
      })

  .state('tab.schedule3', {
        url: "/schedule3",
        views: {
          'tab-menu': {
            templateUrl: "templates/schedule3.html",
            controller: 'ChatsCtrl'
          }
        }
      })

  .state('tab.schedule4', {
        url: "/schedule4",
        views: {
          'tab-menu': {
            templateUrl: "templates/schedule4.html",
            controller: 'ChatsCtrl'
          }
        }
      })

  .state('tab.jcccnc', {
        url: "/jcccnc",
        views: {
          'tab-menu': {
            templateUrl: "templates/jcccnc.html",
            controller: 'ChatsCtrl'
          }
        }
      })

  .state('tab.kabuki', {
        url: "/kabuki",
        views: {
          'tab-menu': {
            templateUrl: "templates/kabuki.html",
            controller: 'ChatsCtrl'
          }
        }
      })

  .state('tab.konko', {
        url: "/konko",
        views: {
          'tab-menu': {
            templateUrl: "templates/konko.html",
            controller: 'ChatsCtrl'
          }
        }
      })

  .state('tab.peace', {
        url: "/peace",
        views: {
          'tab-menu': {
            templateUrl: "templates/peace.html",
            controller: 'ChatsCtrl'
          }
        }
      })

  .state('tab.sakura', {
        url: "/sakura",
        views: {
          'tab-menu': {
            templateUrl: "templates/sakura.html",
            controller: 'ChatsCtrl'
          }
        }
      })

  .state('tab.tateuchi', {
        url: "/tateuchi",
        views: {
          'tab-menu': {
            templateUrl: "templates/tateuchi.html",
            controller: 'ChatsCtrl'
          }
        }
      })

  .state('tab.union', {
        url: "/union",
        views: {
          'tab-menu': {
            templateUrl: "templates/union.html",
            controller: 'ChatsCtrl'
          }
        }
      })

  .state('tab.webster', {
        url: "/webster",
        views: {
          'tab-menu': {
            templateUrl: "templates/webster.html",
            controller: 'ChatsCtrl'
          }
        }
      })

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-menu': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
