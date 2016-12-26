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
	for(var i=n-1;i>1;i--){
		if(n%i==0){
			return false;
		}
	}
	return true;
}