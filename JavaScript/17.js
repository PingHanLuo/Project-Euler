//defs
var onesDict=["one".length,"two".length,"three".length,"four".length,"five".length,"six".length,"seven".length,"eight".length,"nine".length,"ten".length,"eleven".length,"twelve".length,"thirteen".length,"fourteen".length,"fifteen".length,"sixteen".length,"seventeen".length,"eighteen".length,"nineteen".length,]
var tensDict=["".length,"twenty".length,"thirty".length,"forty".length,"fifty".length,"sixty".length,"seventy".length,"eighty".length,"ninety".length];
var thousand="thousand".length,hundred="hundred".length;
//answer
var a=0;
var change=a;
for(var i=1;i<=1000;i++){
	change=a;
	//assign bonuses for thousand and hundred
	if(i>=100&&i<1000){
		a+=hundred;
		//since we are dealing with less than 1 thousand a number cannot get both bonuses
	}
	if(i==1000){
		a+=thousand;
	}
	for(var s=String(i).length-1;s>=0;s--){
		//using mod and divide to put the desired digit in ones. Floor away the decimals
		var digit = Math.floor(i%Math.pow(10,s+1)/Math.pow(10,s));
		if(digit!=0){
			//ones
			if(s%2==0){
				a+=onesDict[digit-1];
				var tens,ones;
				//ensure that there are at least digits in the tens or ones to award 3 letters for "and"
				tens = Math.floor(i%Math.pow(10,2)/Math.pow(10,1));
				ones = Math.floor(i%Math.pow(10,1)/Math.pow(10,0));
				if(s==2&&(tens!=0||ones!=0)){
					a+=3;
				}
			}else{
			//tens
				if(digit!=1){
					a+=tensDict[digit-1];
				}else{
					var secondDigit = Math.floor(i%Math.pow(10,s)/Math.pow(10,s-1));
					//ten to nineteen based on ones digit
					a+=onesDict[9+secondDigit];
					//console.log(onesDict[9+secondDigit]);
					break;
				}
			}
		}
	}
}
//21124
console.log(a);