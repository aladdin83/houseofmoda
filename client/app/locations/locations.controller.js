'use strict';

angular.module('houseofmodaApp')
  .controller('LocationsCtrl', function($scope, $http, uiGmapGoogleMapApi) {
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.locations = [
        {
        id: 1,
        coords: {latitude:25.3853094, longitude:55.4757881},
        city: "Ajman",
        address_line1:"New Industrial Area - Beirute Street",
        address_line2:"Sheikhani Group Building - Shop #4",
        phone: "+971 50 203 2278"
      },{
        id: 2,
        coords: {latitude:25.2352343, longitude:55.4360223},
        city: "Dubai",
        address_line1: "Khawaneej Road, Al Mizhar 1,opp Mushrif Park",
        address_line2: "Arabian Centre",
        phone: "+971 4 285 3123"   
      },{
        id: 3,
        coords: {latitude: 25.3328593, longitude: 51.4618077},
        city: "Doha",
        address_line1: "Al Markhiya, Al Juthay St",
        address_line2: "Ezdan Mall - Al Hawdaj Al Malaki Shop",
        phone: "+974 6674 1138"
      },{
        id: 4,
        coords: {latitude: 33.896316, longitude: 35.477514},
        city: "Beirute",
        address_line1: "Hamrah Street - near Plaza Hotel",
        address_line2: "Al Hawdaj Shop"
 
      }
      ];
      $scope.map = { center: { latitude: 25.3853094, longitude: 55.4757881}, zoom: 8 };
      $scope.position = function(location){
        $scope.map.center = location.coords;
        $scope.map.zoom = 18;
      }
    });
  });
