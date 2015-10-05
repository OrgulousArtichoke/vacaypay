(function() {
  'use strict';

  angular.module('app')
  .controller('AuthController', function ($scope, $window, $state, Auth) {
    $scope.user = {};
    //Sign in function and store token into local storage
    //then change state to currentTrip.html
    $scope.signin = function () {
      Auth.signin($scope.user, function (token) {
          $window.localStorage.setItem('com.vacaypay', token);
          $state.transitionTo("currentTrip.expense")
          $scope.signinForm.$setPristine();
      });
    };
    //Sign up function and store token into local storage
    //then change state to currentTrip.html
    $scope.signup = function () {
      Auth.signup($scope.user, function (token) {
          $window.localStorage.setItem('com.vacaypay', token);
          $state.transitionTo("currentTrip.expense");
          $scope.signupForm.$setPristine();   
      });
    };
  });






})();

