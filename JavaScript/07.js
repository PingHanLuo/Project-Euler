var primes = [];
//start at 2
var x=2;
for(var i=0;i<10001;i++){
	if(!isPrime(x)){
		i--;
	}else if(i==10000){
		//104743
		console.log(x);
	}
	x++;
}
//test for prime
function isPrime(n){
	for(var i=0;i<primes.length;i++){
		if(n%primes[i]==0){
			return false;
		}
	}
	primes.push(n);
	return true;
}