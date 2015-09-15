'use strict';

angular.module('houseofmodaApp')
  .controller('MainCtrl', function($scope, $http) {
    $scope.slickConfig = {
      autoplay: true,
      autoPlaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true      
    }
    $scope.items = [
      {
        id:10500,
        sizes: "S / M / L / XL",
        price: 450
      },
      {
        id:10501,
        sizes: "Free Size",
        price: 350
      },
      {
        id:10503,
        sizes: "M / L",
        price: 480
        },
      {
        id:10504,
        sizes: "M / L / XL",
        price: 480
        },
      {
        id:10505,
        sizes: "Free Size",
        price: 520
        }
    ];
    $scope.itemsLoaded = true;
   
  });
