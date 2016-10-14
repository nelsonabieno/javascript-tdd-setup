// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sumofprimes: function(n) {
  
		    var sum=0;
				for (var i=2;i<=n;i++){

					if(i%2 !=0  || i==2 ){

						var square_root= Math.sqrt(i);

						if ((square_root % 1)!== 0){
								sum+=i;
							}
						}
				}
					
				return sum;
				}
  }
  