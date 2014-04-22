//Yehoshua "Josh" Sanchez
//April 22, 2014
//Functions worksheet
//Find the circumference of a circle
var radius = 25;//given variable is the radius
var circumference = calcCirc(radius);//circumference variable with the fuction and argument for variable
console.log("The circumference of the circle is " + circumference + ".");//prints to the console what the circumference is
function calcCirc(r)//function with parameter for the radius
{
	return 2 * 3.14 * r;//returns the value of the equation
}




//Stung
//Calculate the number of bee sting are needed to kill an animal
var weight = 2;//Given variable is the weight in pounds
var beeStings = 8.666666667;//variable for the bee stings needed per pound
var beeStingTotal = calcBeeSting(weight, beeStings);//variable for total bee stings set to the function that will be used with the arguments for weight and beestings
console.log("It takes " + beeStingTotal + " bee stings to kill this animal.");//Prints to the console how many bee stings it would take to kill the animal.
function calcBeeSting(w, b)//function with the parameters for weight and bee stings
{
	return w * b;//equation with the return code
}
