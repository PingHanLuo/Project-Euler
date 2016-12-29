//overcame javascripts 2^53 size numbers and stored them in an array
var arr=[1];
function DoubleArr(){
	//minusOne variable to manually adjust the previous adjustment
	var minusOne = false;
	//put them in arrays where each element is a sigle digit
	for(var i=0;i<arr.length-1;i++){
		if(minusOne==true){
			arr[i]--;
			arr[i]*=2;
			arr[i]++;
			minusOne=false;
		}else{
			arr[i]*=2;
		}
		//if more than or equal to 10 revert to 1 digit
		if(arr[i]>=10){
			arr[i+1]++;
			arr[i]%=10;
			minusOne=true;
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
for(var i=0;i<1000;i++){
	DoubleArr();
}
var a=0;
for(var i=0;i<arr.length;i++){
	a+=arr[i];
}
console.log(a);