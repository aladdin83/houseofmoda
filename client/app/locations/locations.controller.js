'use strict';

angular.module('houseofmodaApp')
  .controller('LocationsCtrl', function($scope, $http, uiGmapGoogleMapApi) {
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.locations = [
        {
        id: 1,
        coords: {latitude:25.3853094, longitude:55.4757881}
      },{
        id: 2,
        coords: {latitude:25.2352343, longitude:55.4360223}
      }
      ];
      $scope.map = { center: { latitude: 25.3853094, longitude: 55.4757881}, zoom: 8 };
    });
  });
