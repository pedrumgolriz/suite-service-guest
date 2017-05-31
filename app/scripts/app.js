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
  })
  .directive('toggleClass', function ($document) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            console.log(element);

            function elementClick(e) {
                e.stopPropagation();
                element.toggleClass(attrs.toggleClass);
            }

            function documentClick() {
                element.removeClass(attrs.toggleClass);
            }

            element.on('click', elementClick);
            $document.on('click', documentClick);

            // remove event handlers when directive is destroyed
            scope.$on('$destroy', function () {
                element.off('click', elementClick);
                $document.off('click', documentClick);
            });
        }
    };
  });
