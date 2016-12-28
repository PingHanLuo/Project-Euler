//simple choose function?
//2N Choose N?

function N2ChooseN(n){
	//multiplicative formula taken online
	//answer = 2n^n/n!
	var numerator=1,denominator=1;
	for(var i=0;i<n;i++){
		numerator*=(2*n)-i;
		denominator*=n-i;
	}
	return Math.round(numerator/denominator);
}
//137846528820
console.log(N2ChooseN(20));