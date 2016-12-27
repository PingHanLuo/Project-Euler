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
	for(var i=0;i<triNum;i++){
		if(triNum%i==0)
			divisors++;
	}
	if(divisors>=500)
		return true;
	return false
}
console.log(triNum);