//Yehoshua "Josh" Sanchez
//April 22, 2014
//Functions worksheet
//Find the circumference of a circle
var radius = 4;//given variable is the radius
var circumference = calcCirc(radius);//circumference variable with the fuction and argument for variable
console.log("The circumference of the circle is " + circumference + ".");//prints to the console what the circumference is
function calcCirc(r)//function with parameter for the radius
{
	return 2 * 3.14 * r;
}
