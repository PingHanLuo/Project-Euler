var a,z;
for(var x=0;x<1000/2;x++){
	for(var y=x;y<1000/2;y++){
		z=1000-x-y;
		if((x*x)+(y*y)==(z*z)){
			a = x*y*z;
			break;
		}
	}
}
//31875000
console.log(a);