'use strict';

angular.module('houseofmodaApp')
  .controller('UserManagementCtrl', function ($scope, $http, Auth, User) {
    $scope.users = User.query();
    
    $scope.delete = function(user){
      User.remove({id: user._id});
      $scope.users.splice(this.$index, 1);
    };
  });
