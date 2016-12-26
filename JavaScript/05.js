var a = 20;
while(true){
	a++;
	if(isEvenlyDivisible(a)){
		console.log(a);
		//232792560
		break;
	}
}
function isEvenlyDivisible(integer){
	for(var i=1;i<=20;i++){
		if(integer%i!=0){
			return false;
		}
	}
	return true;
}