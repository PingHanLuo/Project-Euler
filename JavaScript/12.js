//very inefficient algorithm O(n squared)
var triNum=0,i=0;
while(true){
	triNum+=i;
	i++;
	if(checkTriNum()){
		break;
	}
}
function checkTriNum(){
	var divisors=0;
	for(var i=2;i<=triNum/2+1;i++){
		if(triNum%i==0){
			divisors++;
		}
	}
	if(divisors>=498){
		return true;
	}
	return false
}
console.log(triNum);
//76576500