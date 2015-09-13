'use strict';

angular.module('houseofmodaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contactus', {
        url: '/contactus',
        templateUrl: 'app/contactus/contactus.html',
        controller: 'ContactusCtrl'
      });
  });
