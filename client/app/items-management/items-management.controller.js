'use strict';

angular.module('houseofmodaApp')
  .controller('ItemsManagementCtrl', function ($scope, $http) {
    $scope.items = [];
    $http.get('/api/items').success(function(items){
      $scope.items = items;
    });
  });
