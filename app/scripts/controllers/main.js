'use strict';

/**
 * @ngdoc function
 * @name suiteServiceGuestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the suiteServiceGuestApp
 */
angular.module('suiteServiceGuestApp')
  .controller('MainCtrl', function ($scope) {
    //MOCK DATA
    $scope.hotelList = [{
      hotelId: 1,
      currency: 'USD',
      hotelName: 'Golriz Manor',
      hotelBanner: 'images/test/golriz.jpg',
      offers: ['breakfast', 'lunch', 'dinner', 'bar', 'drinks', 'housecleaning', 'concierge', 'snacks'],
      services: ['Spa', 'Golf', 'Pool', 'Shuttle', 'Business Accommodations'],
      events: [{id: 1, name: 'Test Event', date: '06/01/2017', location: 'Upper Pool Deck', description: 'lorum ipsum'}],
      foodDrink: [
        {id: 33, name: 'Spaghetti Carbonara', img: 'images/test/carbonara.png', price: 18, description: '', type: ['dinner', 'lunch']},
        {id: 84, name: 'Dom Perignon Champagne', img: 'images/test/dom.png', price: 180, description: '', type: ['bar']},
        {id: 44, name: 'House Salad', img: 'images/test/salad.png', price: 11, description: '', type: ['dinner', 'lunch']},
        {id: 55, name: 'Omelette du Fromage', img: 'images/test/omelette.png', price: 8, description: '', type:['breakfast']},
        {id: 54, name: 'CheeseBurger', img: 'images/test/cheeseburger.png', price: 12, description: '', type: ['lunch']},
        {id: 23, name: 'Coffee', img: 'images/test/coffee.png', price: 4, description: '', type: ['drinks']},
        {id: 53, name: 'Beef Wellington', img: 'images/test/wellington.jpg', price: 39, description: '', type: ['dinner']},
        {id: 42, name: 'Red Vines', img: 'images/test/vines.png', price: 5, description: '', type: ['snacks']}
      ]
    }];
    $scope.guest = {
      user: 'guest',
      hotel: null,
      stayDates: null,
      roomNumber: null,
      cc: null,
      email: null
    };
    $scope.width = 1000;
    $scope.height = 900;
    $scope.firstTimeVisitor = true;
    $scope.user = false;
    $scope.signupLogin = true;
    if(sessionStorage.getItem('ek')){
      $scope.firstTimeVisitor = false;
    }
    if(sessionStorage.getItem('guest')){
      $scope.guest = sessionStorage.getItem('guest');
      $scope.user = true;
    }
    $scope.signInModal = function(){
      $scope.firstTimeVisitor = false;
      sessionStorage.setItem('ek', 1);
    };
    $scope.getUser = function(email, pass, guest){

      if(email && pass){
        //post to db and
        //return guest information $scope.guest
        return 0;
      }
      else if(guest){
        $scope.user = true;
        sessionStorage.setItem('guest', JSON.stringify($scope.guest));
      }

      if($scope.guest.hotel !== null){
        //continue to ordering page
      }
      else{
        //prompt for hotel and stay dates (can try and use geolocation for this later).
        //will only show a list of current hotels for now
      }

    };
  });
