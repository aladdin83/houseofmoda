'use strict';

angular.module('houseofmodaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'uiGmapgoogle-maps',
  'slickCarousel'
]).config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBMykWOQWL5I4lYyM2u8bZM4BGglFWH7aI',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
}).config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })
  
  .factory('authInterceptor', function($rootScope, $q, $cookies, $injector){
    var state;
    return {
      // Add authorization token to headers
      request: function(config){
        config.headers = config.headers || {};
        if($cookies.get('token')){
          config.headers.Authorization = 'Bearer ' + $cookies.get('token');
        }
        return config;
      },
      
      // Intercept 401s and redirect to login
      responseError: function(response){
        if(response.status === 401){
          (state || (state = $injector.get('$state'))).go('login');
          // remove any stale tokens
          $cookies.remove('token');
          return $q.reject(response);
        }
        else{
          return $q.reject(response);
        }
      }
    };
  })
  
  .run(function($rootScope, $state, Auth){
    // Redirect to login if route requires auth and the user is not logged in
    $rootScope.$on('$stateChangeStart', function(event, next) {
      if (next.authenticate) {
        Auth.isLoggedIn(function(loggedIn) {
          if (!loggedIn) {
            event.preventDefault();
            $state.go('login');
          }
        });
      }
    });
  });


