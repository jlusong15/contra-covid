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
  .controller('ContactTracingCtrl', function ($scope, $location) {
    less.registerStylesheets();
    less.refresh(true);

    $scope.fields = {
      step1: {
        fullName: null,
        email: null,
        contactNumber: null,
        address: null,
      },
      step2: {
        temperature: null,
        feeling: 'well',
        hasCough: 'no',
        hadCovidContact: 'no',
        additionalInfo: null
      }
    }

    $scope.currentStep = 1

    $scope.hasError = false
    $scope.errors = {
      step1: {
        fullName: null,
        email: null,
        address: null,
        contactNumber: null,
      },
      step2: {
        temperature: null,
        additionalInfo: null
      }
    }

    $scope.isAdditionalInfoShow = false

    $scope.handleCovidContactChange = function () {
      if($scope.fields.step2.hadCovidContact === 'no') {
        $scope.isAdditionalInfoShow = false
        return false
      }
      $scope.isAdditionalInfoShow = true
    }

    $scope.handleNextClick = function () {
      var fieldsStep = $scope.currentStep === 1 ? $scope.fields.step1 : $scope.fields.step2
      var step = $scope.currentStep === 1 ? 'step1' : 'step2'

      Object.entries(fieldsStep).forEach(function([key, value]) {
        if(!value) {
          $scope.errors[step][key] = key === 'email' ? 'Invalid Email.': 'This field is required.'
        }else {
          $scope.errors[step][key] = null
        }
      });

      var fieldErrors = $scope.currentStep === 1 ? $scope.errors.step1 : $scope.errors.step2
      var hasError = !!Object.entries(fieldErrors).find(function([key, value]) {
        if (key === 'additionalInfo') {
          return $scope.fields.step2.hadCovidContact === 'yes' ? value !== null : false
        }
        return value !== null
      });

      var check = Object.entries(fieldErrors).find(function([key, value]) {
        if (key === 'additionalInfo') {
          return $scope.errors.step2.hadCovidContact === 'yes' ? value !== null : true
        }
        return value !== null
      });

      if (hasError || $scope.currentStep === 4) {
        return false
      }
      
      $scope.currentStep = $scope.currentStep + 1
    }

    $scope.handleBackClick = function () {
      $scope.currentStep = $scope.currentStep - 1
    }

    $scope.handleReset = function () {
      $scope.currentStep = 1
      $scope.fields = {
        step1: {
          fullName: null,
          email: null,
          contactNumber: null,
          address: null,
        },
        step2: {
          temperature: null,
          feeling: 'well',
          hasCough: 'no',
          hadCovidContact: 'no',
          additionalInfo: null
        }
      }
    }

    $scope.goBackHome = function(){
      $location.path('/')
    }

  });
