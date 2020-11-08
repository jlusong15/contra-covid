'use strict';

// Declare app level module which depends on views, and components
angular
  .module('myApp'
    , ['ui.router'
    , 'myApp.home'
    , 'myApp.contactTracing'
    , 'myApp.about'
    , 'myApp.version'
    , 'angular-loading-bar'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
  }).controller('myAppController', function($rootScope, $scope){
    $rootScope.state = 'home';
    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
      $rootScope.state = toState.name;
    });

    $scope.isNotHome = function () {
      return $rootScope.state != 'home'
    }
  });
