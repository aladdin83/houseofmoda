'use strict';

angular.module('houseofmodaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('locations-management', {
        url: '/locations-management',
        templateUrl: 'app/locations-management/locations-management.html',
        controller: 'LocationsManagementCtrl'
      });
  });
