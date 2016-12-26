var a=0;
var one=0,two=1,newTerm=0;
while(newTerm<=4000000){
	newTerm = one+two;
	two = one;
	one = newTerm;
	if(newTerm%2==0){
		a+=newTerm;
	}
}
console.log(a);
//4613732