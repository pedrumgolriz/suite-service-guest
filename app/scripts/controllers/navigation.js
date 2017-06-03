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
      if(localStorage.getItem('bag')){
        $scope.cartItems = JSON.parse(localStorage.getItem('bag'));
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
    $scope.offClick = function(e){
      if($scope.notificationsOpen){
        $scope.notificationsOpen = false;
      }
      if($scope.cartOpen){
        $scope.cartOpen = false;
      }
      e.preventDefault();
    };

    $scope.removeFromBag = function(item){
      $scope.cartTotal = 0;
      for(var i in $scope.cartItems){
        if($scope.cartItems[i].id === item.id){
          $scope.cartItems.splice(i, 1);
        }
        if($scope.cartItems.length > 0){
          $scope.cartTotal+=parseInt($scope.cartItems[i].price);
        }
      }
      localStorage.removeItem('bag');
      localStorage.setItem('bag', JSON.stringify($scope.cartItems));
    };
  });
