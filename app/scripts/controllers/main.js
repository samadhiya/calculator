'use strict';

var myApp = angular.module('multApp');


myApp.controller('MainCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});


myApp.controller('MultiplyCtrl', ['$scope', 'MathService', function ($scope, MathService) {
  $scope.m = {
    num1: 0,
    num2: 0
  };


  $scope.multiply = function () {
    $scope.m.result = MathService.doMultiply($scope.m.num1, $scope.m.num2);
  };

  $scope.$watch('m.num1', function (newValue) {
    $scope.m.result = MathService.doMultiply(newValue, $scope.m.num2);
  });

  $scope.$watch('m.num2', function (newValue) {
    $scope.m.result = MathService.doMultiply($scope.m.num1, newValue);
  });


}]);


myApp.controller('AddCtrl', ['$scope', 'MathService',
  function ($scope, MathService) {
    $scope.m = {
      num1: 0,
      num2: 0
    };

    $scope.add = function () {
      $scope.m.result = MathService.doAdd($scope.m.num1, $scope.m.num2);
    };

    $scope.$watch('m.num1', function (newValue) {
      $scope.m.result = MathService.doAdd(newValue, $scope.m.num2);
    });

    $scope.$watch('m.num2', function (newValue) {
      $scope.m.result = MathService.doAdd($scope.m.num1, newValue);
    });


  }]);


myApp.controller('CalcCtrl', ['$scope', 'MathService',
  function ($scope, MathService) {
    $scope.m = {
      text: "" ,
     equation: ""
    };

    $scope.append = function (n) {
      $scope.m.text = $scope.m.text + String(n);
     $scope.m.equation = $scope.m.equation + String(n);
    }


    var appendSign = function (sign) {
      var expr = String($scope.m.text);
      var lastChar = expr.substring(expr.length - 1);
      if (lastChar !== '+' && lastChar !== '-') {
        $scope.append(sign);
      }
    }

    $scope.plus = function (n) {
      $scope.calc();
      appendSign('+');
    };

    $scope.minus = function (n) {
      $scope.calc();
      appendSign('-');
    };

    $scope.multiply = function (n) {
      $scope.calc();
      appendSign('*');
    };

    $scope.divide = function (n) {
      $scope.calc();
      appendSign('/');
    };

    $scope.decimal = function (n) {

      appendSign('.');
    };

    $scope.calc = function () {
      $scope.m.text = eval($scope.m.text);
    }

  }]);

