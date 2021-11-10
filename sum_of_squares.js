function sumOfSquares(number){
	var sum = 0;
		for (var i=1; i<=number ;i++)
			if(i%2==0){
			sum = sum + (i*i);	
		}
	return sum;
}