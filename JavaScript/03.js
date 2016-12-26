//ignored base cases for input of 0 and 1
var num = 600851475143;
for(var i=2;i<=num;i++){
	if(num==1){
		break;
	}
	if(num%i==0){
		num/=i;
		i--;
	}
}
console.log(i);
//6857