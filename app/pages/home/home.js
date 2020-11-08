'use strict';

angular
  .module('myApp.home', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "pages/home/home.html",
        controller: 'HomeCtrl'
      })
    ;
  })
  .controller('HomeCtrl', function ($scope, $location) {
    $scope.pageClass = "home";
    $scope.bannerHeader = "Be part of the SOLUTION";
    $scope.bannerDetails = "ConTra means Contact Tracing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a augue neque. Integer ullamcorper tempor tempor. Aenean blandit interdum quam, nec pellentesque neque rutrum at. Mauris a risus elit. Vivamus nisl felis."
    
    $scope.contactTracing = function () {
      $location.path('/contact-tracing')
    }

    less.registerStylesheets();
    less.refresh(true);


  });
