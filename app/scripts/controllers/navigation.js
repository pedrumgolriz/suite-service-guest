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
    $scope.notificationsOpen = false;
    $scope.cartOpen = false;
    $scope.cartTotal = 0;
    $scope.$watch(function () {
       return localStorage.getItem('guest');
    }, function () {
       $scope.isLoggedIn = localStorage.getItem('guest');
       $scope.user = JSON.parse($scope.isLoggedIn);
    }, true);
    $scope.openCart = function(){
      if(localStorage.getItem('cart')){
        $scope.cartItems = JSON.parse(localStorage.getItem('order'));
        for(var i in $scope.cartItems){
          $scope.cartTotal+=parseInt($scope.cartItems[i].price);
        }
      }
      else{
        $scope.cartItems = [];
      }
      $scope.cartOpen = !$scope.cartOpen;
    };

    $scope.openNotifications = function(){
      $scope.notificationsOpen = !$scope.notificationsOpen;
    };
  });
