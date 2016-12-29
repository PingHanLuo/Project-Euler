//using similar tactic in 16 to use arrays
var arr=[1];
function multiply(m){
	//minusOne variable to manually adjust the previous adjustment
	var minus = 0;
	//put them in arrays where each element is a sigle digit
	for(var i=0;i<arr.length-1;i++){
		if(minus>0){
			arr[i]--;
			arr[i]*=i;
			arr[i]++;
			minusOne=0;
		}else{
			arr[i]*=2;
		}
		//if more than or equal to 10 revert to 1 digit
		if(arr[i]>=10){
			arr[i+1]++;
			minusOne=arr[i]/10;
			arr[i]%=10;
		}
	}
	if(minusOne==true){
		arr[arr.length-1]--;
		arr[arr.length-1]*=2;
		arr[arr.length-1]++;
	}else{
		arr[arr.length-1]*=2;
	}
	if(arr[arr.length-1]>=10){
		arr[arr.length-1]%=10;
		arr.push(1);
	}
}
for(var i=1;i<=1000;i++){
	multiply(i);
}
var a=0;
for(var i=0;i<arr.length;i++){
	a+=arr[i];
}
console.log(a);