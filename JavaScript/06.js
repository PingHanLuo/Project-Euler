var a=0;
var s=0;
for(var i=1;i<=100;i++){
	a+=i*i;
	s+=i;
}
a=Math.abs(a-s*s);
console.log(a);