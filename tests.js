'use strict'

var chai = require('chai');
var assert = chai.assert;
//2,3,5 string input, -ve inputs
var lib = require('./lib/sumofprimes.js');

describe("Test that sums up all the prime numbers from 1 to n", function() {

  it("should give invalid parameter for a string input", function() {
    assert(lib.sumofprimes("mystring")==false);
  
  });

  it("should give invalid parameter for an array of numbers input", function() {
    assert(lib.sumofprimes([2,4])==false);
  
  });

  it("should output 0 if zero is supplied", function() {
    assert(lib.sumofprimes(-4)==false);
  
  });

  it("should give invalid parameter for a character input", function() {
    assert(lib.sumofprimes('w')==false);
  
  });

  it("should give invalid parameter for an undefined input", function() {
    assert(lib.sumofprimes(undefined)==false);
  
  });

  it("should give invalid parameter for a boolean ", function() {
    assert(lib.sumofprimes(true)==false);
  
  });

  it("should give invalid parameter for a boolean ", function() {
    assert(lib.sumofprimes(false)==false);
  
  });

  it("should give invalid parameter for an object", function() {
    assert(lib.sumofprimes({1:7})==false);
  
  });

  it("should give invalid input for an array of string input", function() {
    assert(lib.sumofprimes(["first","second"])==false);
  
  });

  it("should give out of range for sum of prime numbers from 1 to input n > 104848", function() {
    assert(lib.sumofprimes(654321)=="sum of prime numbers of input is out of range");
  
  });

  it("should give 10 for prime nos between 1 and 5", function() {
    assert(lib.sumofprimes(5)==10);
  
  });

  it("should give 17 for prime nos between 1 and 10", function() {
    assert(lib.sumofprimes(10)==17);
  
  });

  it("should output 328 for prime nos between 1 and 50", function() {
    assert(lib.sumofprimes(50)==328);
  
  });

  it("should output sum 16401 if 433 is supplied", function() {
    assert(lib.sumofprimes(433)==16401);
  
  });

  it("should output sum 277050 if 2000 is supplied", function() {
    assert(lib.sumofprimes(2000)==277050);
  
  });
  
});