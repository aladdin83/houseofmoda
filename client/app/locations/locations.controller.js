'use strict';

angular.module('houseofmodaApp')
  .controller('LocationsCtrl', function($scope, $http, uiGmapGoogleMapApi) {
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.locations = [];
      $http.get('/api/locations').success(function(locations){
        $scope.locations = locations;
      })
      $scope.map = { center: { latitude: 25.3853094, longitude: 55.4757881}, zoom: 8 };
      $scope.position = function(location){
        $scope.map.center = location.coords;
        $scope.map.zoom = 18;
      }
    });
  });
