function pow(x,y){
	var result = 1;
	if (y ==0){
		return result
	}
	else if (y>0){
		while(y !=0){
		result = result *x;
		y-=1;
		//document.write("positive"+" " +result+"<br>")
		}
	}
	else if (y <0) {
		while(y !=0){
		result = result/x;
		y+=1;
		//document.write("negative"+" " +result+"<br>")
		}

	}
return result;
}