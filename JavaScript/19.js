//rules
var week=7;
var Calendar=[31,28,31,30,31,30,31,31,30,31,30,31];
//Jan 1,1900 was monday
//first day of the new month
var overSpill=1;
//answer
var a=0;
//given date at 1900
for(year=1900;year<=2000;year++){
	//start at 1901
	if(year==1901){
		//start counting at 1901
		a=0;
	}
	//check for leap year
	if(year%100==0){
		if(year%400==0){
			Calendar[1]++;
		}
	}else{
		if(year%4==0){
			Calendar[1]++;
		}
	}
	//iterate through months
	for(var m=0;m<12;m++){
		//overspill of 0 means it start with Sunday
		if(overSpill==0){
			a++;
		}
		overSpill+=Calendar[m];
		overSpill%=7;
		//calculate the next month's overspill
	}
	reset();
}

function reset(){
	Calendar=[31,28,31,30,31,30,31,31,30,31,30,31];
}
//171
console.log(a);