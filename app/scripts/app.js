'use strict';

/**
 * @ngdoc overview
 * @name suiteServiceGuestApp
 * @description
 * # suiteServiceGuestApp
 *
 * Main module of the application.
 */
angular
  .module('suiteServiceGuestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/order', {
        templateUrl: 'views/order.html',
        controller: 'OrderCtrl',
        controllerAs: 'order'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.hashPrefix('!');
  });
