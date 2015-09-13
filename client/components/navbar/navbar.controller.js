'use strict';

angular.module('houseofmodaApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    },{
      'title': 'Locations',
      'state': 'locations'
    },{
      'title': 'About Us',
      'state': 'aboutus'
    },{
      'title': 'Contact Us',
      'state': 'contactus'
    }];

    $scope.isCollapsed = true;
  });
