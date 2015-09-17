'use strict';

angular.module('houseofmodaApp')
  .controller('LocationsManagementCtrl', function ($scope, $http) {
    $scope.locations = [];
    $http.get('/api/locations').success(function(locations){
        $scope.locations = locations;
    });
  });
