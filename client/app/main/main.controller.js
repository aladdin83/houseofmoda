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
    $scope.items = [];
    $http.get('/api/items').success(function(items){
      $scope.items = items;
      $scope.itemsLoaded = true;
    });
    
    $scope.addToFav = function(item){
      console.log(item);
    }
  });
