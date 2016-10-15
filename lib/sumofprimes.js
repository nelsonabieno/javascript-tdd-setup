
// javascript function sumofprimes to return the sum of prime numbers from 1 to any given number
'use strict'
module.exports = {
  sumofprimes: function(num) {
  		//checks if type of input is undefined
	  	if (typeof num == "undefined" ) {
	  		return false;
	  	}
	  	//checks if type of input is boolean
	  	if (typeof num == "boolean") {
	  		return false;
	  	}
  		//checks if type of input is string
	  	if (typeof num == "string" ) {
	  		return false;
	  	}
	  	//checks if type of input is object array
	  	if (typeof num == "object" ) {
	  		return false;
	  	}	
	  	//checks if type of input is number and expected sum is within valid range
	  	if (typeof num == "number" && num >104848 ) {
	  		return "sum of prime numbers of input is out of range";
	  	}
	  	//checks if type of input is a negative number 
	  	if (typeof num == "number" && num <0 ) {
	  		return false;
	  	}
	  	var sum=0; //initializes sum to 0
		for (var i = 1; i <= num; i++) { 		 		  
			var counter=0; //initializes counter to 0
			for(var j =num; j>=1; j--) {
				if(i%j===0) {
					counter ++; //the value of counter is incremented by 1 if i modulus j is 0
				}
			}
			if (counter ==2) {
				sum+=i; //this sums up the number since number is prime
			}	
		}
		return sum;	//returns the sum value to a function call	
	}
}
  