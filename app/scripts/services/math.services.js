'use strict';

var mathServices = angular.module('math', []);

mathServices.factory('MathService', function () {

  var mathObject = {};

  mathObject.doAdd = function (a, b) {
    return parseInt (a, 10) + parseInt(b, 10);
  };

  mathObject.doMultiply = function (a, b) {
    return parseInt(a, 10) * parseInt(b, 10);
  };


  return mathObject;
});

