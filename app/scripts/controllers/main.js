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
    $scope.hotelList = [
      {
        hotelId: 1,
        currency: 'USD',
        name: 'Golriz Manor',
        banner: 'images/test/golriz.jpg',
        location: 'Potomac, MD',
        zip: 20878,
        latitude: null,//set later for geolocation
        longitude: null, //set later for geolocation
        offers: [
          {name: 'breakfast', open: '7:30', close: '10:30'},
          {name: 'lunch', open: '11:00', close: '17:00'},
          {name: 'dinner', open: '18:00', close: '23:00'},
          {name: 'snacks', open: '00:00', close: '00:00'},
          {name: 'bar', open: '11:00', close: '00:00'},
          {name: 'housecleaning'},
          {name: 'concierge'},
        ],
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
      },
      {
        hotelId: 2,
        currency: 'USD',
        name: 'Potomac INN',
        banner: 'images/test/potomac.jpg',
        location: 'Potomac, MD',
        zip: 20854,
        latitude: null,//set later for geolocation
        longitude: null, //set later for geolocation
        offers: [
          {name: 'breakfast', open: '7:30', close: '10:30'},
          {name: 'lunch', open: '11:00', close: '17:00'},
          {name: 'dinner', open: '18:00', close: '23:00'},
          {name: 'snacks', open: '00:00', close: '00:00'},
          {name: 'bar', open: '11:00', close: '00:00'},
          {name: 'housecleaning'},
          {name: 'concierge'},
          {name: 'snacks', open: '00:00', close: '00:00'}
        ],
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
      },
    ];
    var mockGuest = {
      user: 'guest',
      id: null,
      hotel: null,
      stayDates: null,
      roomNumber: null,
      cc: null,
      email: null
    };

    $scope.guest = mockGuest;

    $scope.width = 1000;
    $scope.height = 900;
    $scope.firstTimeVisitor = true;
    $scope.user = false;
    $scope.signupLogin = true;
    if(localStorage.getItem('ek')){
      $scope.firstTimeVisitor = false;
    }
    if(localStorage.getItem('guest')){
      $scope.guest = JSON.parse(localStorage.getItem('guest'));
      $scope.user = true;
    }
    $scope.signInModal = function(){
      $scope.firstTimeVisitor = false;
      localStorage.setItem('ek', 1);
    };
    $scope.getUser = function(email, pass, guest){

      if(email && pass){
        //post to db and
        //return guest information $scope.guest
        return 0;
      }
      else if(guest){
        $scope.user = true;
      }

      if($scope.guest.hotel !== null){
        //continue to ordering page
      }
      else{
        //prompt for hotel and stay dates (can try and use geolocation for this later).
        //will only show a list of current hotels for now
      }
    };

    $scope.selectHotel = function(hotel){
      //will prompt for guest info at checkout, even room number
      $scope.guest.hotel = hotel;
      localStorage.setItem('guest', JSON.stringify($scope.guest));
    };

    $scope.clearHotel = function(){
      $scope.guest.hotel = null;
      localStorage.removeItem('guest');
    };
  })
  .filter('formatTime', function () {
    return function (time) {
        var parts = time.split(':');
        var returnString = '';
        if(parts[0] > 12){
          parts[0] = parts[0]-12;
          parts.push('PM');
        }
        else{
          parts.push('AM');
        }
        if(parts[0] === '00'){
          parts[0] = '12';
        }
        parts[0]=parts[0]+':';
        for(var i in parts){
          returnString+= parts[i];
        }
        return returnString;
    };
  });
