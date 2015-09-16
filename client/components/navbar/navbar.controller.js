'use strict';

angular.module('houseofmodaApp')
  .controller('NavbarCtrl', function ($scope, Auth) {
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
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
