'use strict';

describe('Calculator Ctrl', function () {

  var math, scope, AddController;

  beforeEach(module('multApp'));

  beforeEach(inject(function ($rootScope, MathService, $controller) {
    math = MathService;
    scope = $rootScope.$new();
    AddController = $controller('CalcCtrl', {
      $scope: scope,
      MathService: math
    })
  }));

  it('should have empty m object', function () {
    expect(scope.m).toEqual({text: "", equation: ""});
  });



  it('should append numbers and signs in scope', function () {
      scope.m.text = "";
    scope.append(6);
    scope.plus('+');
    scope.append(8);
    expect(scope.m.text).toBe("6+8");
    expect(scope.m.equation).toBe("6+8");
  });

  it('should calculate with multiple signs', function () {
    scope.m.text = "";
    scope.append(6);
    scope.plus('+');
    scope.append(8);
    scope.minus('-');
    scope.append(4);
    scope.multiply('*');
    scope.append(4);
    scope.divide('/');
    scope.append(1);
    scope.plus('+');
    scope.append(4);
    scope.decimal('.');
    scope.append(2);

    scope.calc();

    expect(scope.m.text).toBe(44.2);
    expect(scope.m.equation).toBe("6+8-4*4/1+4.2");
  });


});
