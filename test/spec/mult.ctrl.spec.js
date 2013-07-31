'use strict';

describe('Mult Ctrl', function () {

  var math, scope, MultiplyController;

  beforeEach(module('multApp'));

  beforeEach(inject(function ($rootScope, MathService, $controller) {
    math = MathService;
    scope = $rootScope.$new();
    MultiplyController = $controller('MultiplyCtrl', {
      $scope: scope,
      MathService: math
    })
  }));

  it('should have empty m object', function () {
    expect(scope.m).toEqual({num1: 0, num2: 0});
  });

  it('should multiply numbers in scope', function () {
    scope.m.num1 = 10;
    scope.m.num2 = 20;
    scope.multiply();
    expect(scope.m.result).toBe(200);
  });


  it('should calculate result on change of num1', function () {
    scope.m.num2 = 20;

    /**
     * scope.$apply is called from outside angular code.
     * this is update the angular model values by external (non-angular) code
     * and let angular run its processing including watches.
     */
    scope.$apply(function () {
      scope.m.num1 = 10;
    });

    expect(scope.m.result).toBe(200);
  });


});