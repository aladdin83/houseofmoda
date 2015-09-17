'use strict';

angular.module('houseofmodaApp')
  .controller('MessagesCtrl', function ($scope, $http) {
    $scope.messages = [];
    $http.get('/api/messages').success(function(messages){
      $scope.messages = messages;
    });
  });
