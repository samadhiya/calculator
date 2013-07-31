'use strict';

angular.module('multApp', ['math'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });


    $routeProvider.when('/mult', {
      templateUrl: 'views/multiply.html',
      controller: 'MultiplyCtrl'
    });

    $routeProvider.when('/calculate', {
      templateUrl: 'views/calculator.html',
      controller: 'CalcCtrl'
    });

    $routeProvider.when('/add', {
      templateUrl: 'views/add.html',
      controller: 'AddCtrl'
    });

    $routeProvider.otherwise({
      redirectTo: '/'
    });
  })
;
