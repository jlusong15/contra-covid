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
  .controller('HomeCtrl', function ($scope) {
    $scope.pageClass = "home";
    less.registerStylesheets();
    less.refresh(true);


  });
