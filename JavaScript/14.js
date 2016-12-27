var longest=0;
var a;
var seqLength;
//shortcuts array
var scArray=[0,1];
//base cases for 0 and 1 are both 0. Algorithm starts at 2
for(var i=2;i<1000000;i++){
	seqLength=findSeqLength(i);
	if(seqLength>longest){
		longest=seqLength;
		a=i;
	}
}
//recursive because its prettier and easier
function findSeqLength(num){
	var length;
	//check if this path was already taken before
	if(scArray[num])
		return scArray[num];
	if(num%2==0){
		length=findSeqLength(num/2)+1;
		//put this path in for future numbers
		scArray[num]=length;
		return length;
	}else{
		length=findSeqLength((num*3)+1)+1;
		scArray[num]=length;
		return length;
	}
}
//837799
console.log(a);