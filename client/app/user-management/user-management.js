'use strict';

angular.module('houseofmodaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user-management', {
        url: '/user-management',
        templateUrl: 'app/user-management/user-management.html',
        controller: 'UserManagementCtrl'
      });
  });
