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
        id:11187,
        sizes: "S / M / L / XL",
        price: 530
      },
      {
        id:11195,
        sizes: "Free Size",
        price: 480
      },
      {
        id:11158,
        sizes: "S / M / L / XL",
        price: 450
        },
      {
        id:11167,
        sizes: "S / M / L / XL",
        price: 550
        },
      {
        id:11161,
        sizes: "S / M / L / XL",
        price: 360
      },
      {
        id:11180,
        sizes: "Free",
        price: 580
      },
      {
        id:11163,
        sizes: "Free",
        price: 375
      },
      {
        id:11146,
        sizes: "Free",
        price: 680
      },
      {
        id:11144,
        sizes: "S / M / L / XL",
        price: 560
      },
      {
        id:11142,
        sizes: "S / M / L / XL",
        price: 530
      },
      {
        id:11135,
        sizes: "S / M / L / XL",
        price: 580
      },
      {
        id:11132,
        sizes: "S / M / L / XL",
        price: 450
      }
    ];
    $scope.itemsLoaded = true;
    $scope.addToFav = function(item){
      console.log(item);
    }
  });
