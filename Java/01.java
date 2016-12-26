int a = 0;
for(int i=0;i<1000;i+=3){
	a+=i;
}
for(int i=0;i<1000;i+=5){
	if(i%3!=0){
		a+=i;
	}
}
System.out.println(a);