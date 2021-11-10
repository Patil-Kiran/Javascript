//Sum of Digits !!		
		
var number = parseInt(prompt("Enter the number"));
var temp = number ;
var sum = 0;
	while(temp !=0){
		var digit = temp%10;
		sum = sum + digit ;
		var temp = Math.trunc(temp/10);
		document.write(temp+"<br>");
		//return sum ;
	}

document.write("The Sum Of digits of "+number+" = "+sum);