/*
Although it is pointless to set properties for left and right
it makes the solution more intuitive and versatile
*/

var input="75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23";
//array version of triangle

//eytzinger like method to parse array into triangle
var arr=input.split(" ");
//starting point of new row
var i=1;
var head = new Node(Number(arr[0]));
var nodes=[head];
var nextNodes=[];
//create the triangle like a tree
while(i+1<arr.length){
	//assuming it is triangle shaped
	for(var j=0;j<nodes.length+1;j++){
		var newNode= new Node(Number(arr[j+i]));
		nextNodes.push(newNode);
		//add to node
		if(j-1>=0){
			nodes[j-1].left=nextNodes[j-1];
			if(nextNodes[j-1].value-nextNodes[j-1].baseVal<nodes[j-1].value){
				nextNodes[j-1].value=nextNodes[j-1].baseVal+nodes[j-1].value;
			}
			//check which path is better for left
			nodes[j-1].right=nextNodes[j];
			nextNodes[j].value+=nodes[j-1].value;
			//don't check for right
		}
	}
	i+=nodes.length+1;
	nodes = nextNodes;
	nextNodes=[];
}
//find answer
var a=0;
//iterate through tree to find answer
for(var i=0;i<nodes.length;i++){
	if(nodes[i].value>a){
		a=nodes[i].value;
	}
}
console.log(a);

//tree like behaviour to parse through
function Node(value){
	this.value=value;
	this.baseVal=value;
	this.left=undefined;
	this.right=undefined;
}