'use strict';

/**
 * @ngdoc function
 * @name suiteServiceGuestApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the suiteServiceGuestApp
 */
angular.module('suiteServiceGuestApp')
  .controller('NavCtrl', function ($scope) {
    $scope.isLoggedIn = localStorage.getItem('guest');
    $scope.user = JSON.parse($scope.isLoggedIn);
    $scope.$watch(function () {
       return localStorage.getItem('guest');
    }, function () {
       $scope.isLoggedIn = localStorage.getItem('guest');
       $scope.user = JSON.parse($scope.isLoggedIn);
    }, true);
  });
