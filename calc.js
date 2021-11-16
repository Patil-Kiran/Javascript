exports.add = (a,b) =>{
    return a+b;
}

exports.subtract = (a,b)=>{
    return "Subtraction = "+a-b;
}

exports.multiply = (a,b)=>{
    return "Multiplication = "+a*b;
}
exports.divide = (a,b)=>{
    return "Division = "+a/b;
}
exports.square = (a) =>{
    return "Square ("+a+") = "+a*a;
}
exports.sum = function(){
    sum =0;
    for(let i=0 ;i<arguments.length;i++){
        sum +=arguments[i];
    }
    return "Sum of Arguments = "+sum;
}

exports.min = (a,b,c) =>{
    if(a>b){
        if(b<c){
            return "Minimum number ="+b;
        }
        else{
            return "Minimum number ="+c;
        }
    }
    else if(b>a){
        if(a<c){
            return "Minimum number ="+a;
        }
        else{
            return "Minimum number ="+c;
        }       
    }
    else{
        return "Minimum number ="+c
    }

}

exports.max = (a,b,c) =>{
    if(a>b){
        if(a<c){
            return "Maximum number ="+c;
        }
        else{
            return "Maximum number ="+a;
        }
    }
    else if(b>a){
        if(c<b){
            return "Maximum number ="+b;
        }
        else{
            return "Maximum number ="+c;
        }       
    }
    else{
        return "Maximum number ="+c
    }

}
