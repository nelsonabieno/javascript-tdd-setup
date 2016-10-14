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

  it("should give invalid string for a string input", function() {
    assert(lib.sumofprimes("mystring")==false);
  
  });
  
});