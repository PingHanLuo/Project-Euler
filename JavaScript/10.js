var primes = [2];
//partial sol taken from 7
var a=2;
//start at 2 as base case
for(var i=3;i<2000000;i+=2){
//increment 2 to make it check only odd numbers since even numbers cannot be prime
	if(isPrime(i)){
		a+=i;
		primes.push(i);
	}
}
//test for prime
function isPrime(n){
	for (var i=0;i<primes.length;i++){
	//check only from primes list
		if(n%primes[i]==0){
			return false;
		}
	}
	return true;
}
console.log(a);