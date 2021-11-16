exports.calArea = (length,breadth) =>{
    let area = length*breadth ;
    return "The Area of the Rectangle = "+area;
}
exports.calPerimeter = (length,breadth) =>{
    let perimeter = 2*(length+breadth) ;
    return "The Perimeter of Rectangle = "+perimeter;
}



console.log(exports.calArea(10,20));
console.log(exports.calPerimeter(10,20));
