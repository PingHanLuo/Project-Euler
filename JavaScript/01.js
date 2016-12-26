var a=0;
for(var i=0;i<1000;i+=3){
	a+=i;
}
for(var i=0;i<1000;i+=5){
	if(i%3!=0){
		a+=i;
	}
}
console.log(a);