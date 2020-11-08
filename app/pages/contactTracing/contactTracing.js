'use strict';

angular
  .module('myApp.contactTracing', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('contactTracing', {
        url: "/contact-tracing",
        templateUrl: "pages/contactTracing/contactTracing.html",
        controller: 'ContactTracingCtrl'
      })
    ;
  })
  .controller('ContactTracingCtrl', function ($scope) {
    less.registerStylesheets();
    less.refresh(true);
    
    $scope.currentStep = 1

    $scope.handleNextClick = function () {
      console.log('next triggered')
      // return true
    }

    $scope.handleSetStep = function (step) {
      console.log('set triggered')
      $scope.currentStep = step
      // return true
    }

  });
