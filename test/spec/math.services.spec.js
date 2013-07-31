'use strict';

/**
 * describe ('', function() {
 *
 *
 *
 *   it('the actual test....', function() {
 *
 *   });
 *
 *
 * });
 *
 *
 */
/**
 * describe is a test suite
 *
 * beforeEach is another function that you can use to do
 * initialization work - any pre work that your test
 * depends on
 */
describe('Math Service', function () {

  var math;

  beforeEach(module('multApp'));

  beforeEach(inject(function (MathService) {
    math = MathService;
  }));

  /**
   * it is the actual test check
   */
  it('should add 2 numbers properly', function () {
    var result = math.doAdd(2, 3);
    console.log("Math result " + result);
    expect(result).toBe(5);
  });


  it('should multiply 2 numbers properly', function () {
    var result = math.doMultiply(2, 3);
    console.log(result);
    expect(result).toBe(6);
  });


  it('should return NaN for add if numbers not provided', function () {
    var result = math.doAdd(2, "vaibhav");
    expect(result).toBeFalsy();
  });

  it('should return NaN for multiply if numbers not provided', function () {
    var result = math.doMultiply(2, "vaibhav");
    expect(result).toBeFalsy();
  });

});