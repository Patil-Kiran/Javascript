exports.factorial = (number) =>{
    fact = 1;
    if(number ==0 || number==1){
        fact *=1;
    }
    while(number !=0){
        fact *=number
        number -=1;
    }
    return "Factorial of "+number+" = "+fact ;
}  

exports.myprime = (number) =>{
    flag = false;
    for(let i=2 ;i<number;i++){
        if(number % i ==0){
            flag =true;
            break;
        }
    }
    if(flag){
        return number+" is Prime Number" ;
    }
    else{
        return number+" is not Prime Number"
    }
}

exports.printable = (number) =>{
    for(let i=0 ;i<=10;i++){
        console.log(number+" X "+i+"   = "+ number*i)
    }
}
console.log(exports.factorial(5));
console.log(exports.myprime(131));
exports.printable(19);