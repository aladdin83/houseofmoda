'use strict';

angular.module('houseofmodaApp')
  .controller('MainCtrl', function($scope, $http) {
    $scope.slickConfig = {
      autoplay: true,
      autoPlaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true      
    }
    $scope.items = [
      {id:10500},
      {id:10501},
      {id:10503},
      {id:10504},
      {id:10505}
    ];
    $scope.itemsLoaded = true;
   
  });
