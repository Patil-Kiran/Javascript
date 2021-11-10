// Find out miminum of any variable arguments
function min(){
	var minimum = Infinity;
		for (var i=0;i<arguments.length;i++){
			if (arguments[i] < minimum){
				minimum = arguments[i]
			}
		}
return minimum ;
}


/*
				document.write("The minimum among array ="+min(3,4,5,6,7,2,7)+"<br>");
				document.write("The minimum among array ="+min(344,3,32,32,242,1,434,44,5,432,1,212,1343,-44943,-55555)+"<br>");
				document.write("The minimum among array ="+min(3,4,5,6,72,3,2,2,4)+"<br>");

*/