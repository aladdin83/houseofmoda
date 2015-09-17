'use strict';

angular.module('houseofmodaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('items-management', {
        url: '/items-management',
        templateUrl: 'app/items-management/items-management.html',
        controller: 'ItemsManagementCtrl'
      });
  });
