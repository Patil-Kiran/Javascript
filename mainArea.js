var circleDetails = require("./circle");
var rectangleDetails = require("./rectangle");
var triangleDetails = require("./triangle");


console.log(circleDetails);
console.log(triangleDetails);
console.log(rectangleDetails);

console.log(circleDetails.calArea(14));
console.log(circleDetails.calCircumference(14));
console.log(circleDetails.calDiameter(14));
console.log(triangleDetails.calPerimeter(10,20,30));
console.log(triangleDetails.isEquilateral(10,20,20));
console.log(triangleDetails.isEquilateral(20,20,20));
console.log(rectangleDetails.calArea(10,20));
console.log(rectangleDetails.calPerimeter(10,20));