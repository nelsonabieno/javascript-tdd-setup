
// javascript program to return the sum of prime numbers from 1 to any given number
'use strict'
module.exports = {
  sumofprimes: function(num) {
  		//checks if type of input is string
	  	if (typeof num == "string" ) {
	  		return false;
	  	}
	  	//checks if type of input is object
	  	if (typeof num == "object" ) {
	  		return false;
	  	}
	  	//checks if type of input is a number
	  	if (typeof num == "number") {
	  		if (num < 0 ) {
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
}
  