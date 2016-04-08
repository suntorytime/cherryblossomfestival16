angular.module('starter.controllers', ['angularMoment'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsMenuCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:

  $scope.chats = Chats.all();

  $scope.items = [
    { number: 11 },
    { number: 12 },
    { number: 17 },
    { number: 18 },
  ];

  $scope.selectedItem = $scope.items[0];
  })

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
  };
});
