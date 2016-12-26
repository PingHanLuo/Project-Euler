var largest=0;
var product;
for(var i=100;i<1000;i++){
	for(var j=100;j<1000;j++){
		product = i*j;
		if(palindrome(""+product)){
			if(product>largest){
				largest=product;
			}
		}
	}
}

function palindrome(string){
	var length = string.length;
	for(var i=0;i<length;i++){
		if(string[i] != string[length-i-1]){
			return false;
		}
	}
	return true;
}
console.log(largest);
//906609