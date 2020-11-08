'use strict';

angular
  .module('myApp.about', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('about', {
        url: "/",
        templateUrl: "pages/about/about.html",
        controller: 'aboutCtrl'
      })
    ;
  })
  .controller('aboutCtrl', function ($scope) {
    $scope.pageClass = "about";
    less.registerStylesheets();
    less.refresh(true);


  });
