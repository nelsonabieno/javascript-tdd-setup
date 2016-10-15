'use strict'

var chai = require('chai');
var assert = chai.assert;
//2,3,5 string input, -ve inputs
var lib = require('./lib/sumofprimes.js');

describe("Test that sums up all the prime numbers from 1 to n", function() {
  it("should give 10 for prime nos between 1 and 5", function() {
    assert(lib.sumofprimes(5)==10);
  
  });

  it("should give 17 for prime nos between 1 and 10", function() {
    assert(lib.sumofprimes(10)==17);
  
  });

  it("should output 328 for prime nos between 1 and 50", function() {
    assert(lib.sumofprimes(50)==328);
  
  });

  it("should give invalid parameter for a string input", function() {
    assert(lib.sumofprimes("mystring")==false);
  
  });

  it("should give invalid parameter for an array input", function() {
    assert(lib.sumofprimes([2,4])==false);
  
  });

  it("should output 0 if zero is supplied", function() {
    assert(lib.sumofprimes(-4)==false);
  
  });

  it("should give invalid parameter for an object", function() {
    assert(lib.sumofprimes({1:7})==false);
  
  });

  it("should output 16401 if 433 is supplied", function() {
    assert(lib.sumofprimes(433)==16401);
  
  });
  
});