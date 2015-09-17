'use strict';

angular.module('houseofmodaApp')
  .directive('adminSidePanel', function () {
    return {
      templateUrl: 'components/admin-side-panel/admin-side-panel.html',
      restrict: 'EA'
    };
  });
