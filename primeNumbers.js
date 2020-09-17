// Return all the prime numbers in an array
var array = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

var isPrime = function(n){
	for ( var i = 2; i < n; i++ ) {
        if ( n % i === 0 ) {
            return;
        }
    }
    return n;
}

for(i=0;i<array.length;i++){
	n = isPrime(array[i]);
	if(typeof(n) == "number"){
		console.log(n);
	}
}
