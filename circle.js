exports.calArea = (radius) =>{
    let area = Math.PI *(radius)*(radius);
    return "The Area of the Circle = "+area;
}
exports.calCircumference = (radius) =>{
    let circumference = Math.PI*2*radius ;
    return "The Circumference of Circle = "+circumference;
}

exports.calDiameter = (radius) =>{
    let dia = 2*radius ;
    return "The Diameter of Circle  = "+dia;
}

