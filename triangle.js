exports.isEquilateral  = (side1,side2,side3) =>{
    if(side1==side2 && side2==side3){
        return "The Traingle is equilateral triangle"
    }
    else{
        return "The triangle is not a equilateral triangle"
    }
}

exports.calPerimeter = (side1,side2,side3) =>{
    let perimeter = side1+side2+side3 ;
    return "The Perimeter of Triangle = "+perimeter ;
}


console.log(exports.calPerimeter(10,20,30));
console.log(exports.isEquilateral(10,20,20));
console.log(exports.isEquilateral(20,20,20));
