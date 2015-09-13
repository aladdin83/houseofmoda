'use strict';

angular.module('houseofmodaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('aboutus', {
        url: '/aboutus',
        templateUrl: 'app/aboutus/aboutus.html',
        controller: 'AboutUsCtrl'
      });
  });
