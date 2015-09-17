'use strict';

angular.module('houseofmodaApp')
  .controller('ContactusCtrl', function ($scope, $http) {
    $scope.message = {};
    
    $scope.submit = function(){
      $http.post('/api/messages', $scope.message).success(function(){
        $scope.message = {};
        $scope.messageSent = true;
      });
    };
  });
