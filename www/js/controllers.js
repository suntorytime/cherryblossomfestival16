angular.module('starter.controllers', ['angularMoment'])

.controller('DashCtrl', function($scope) {})

.controller('eventsMenuCtrl', function($scope) {})

.controller('eventsCtrl', function($scope, events) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:

  $scope.events = events.all();

  $scope.items = [
    { number: 11 },
    { number: 12 },
    { number: 17 },
    { number: 18 },
  ];

  $scope.selectedItem = $scope.items[0];
  })

.controller('eventDetailCtrl', function($scope, $stateParams, events) {

  $scope.event = events.get($stateParams.eventId);
})

.controller('socialCtrl', function($scope) {
  $scope.settings = {
  };
});
