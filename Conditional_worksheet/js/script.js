// Yehoshua "Josh" Sanchez 04-14-2014 Conditionals Worksheet

//Last Chance for Gas!
//Is there enough gas left to make it to the next gas station 200 miles away
//variables needed to complete the expression
var mpg = //variable for the amount of miles the car gets per gallon
var gasLeftPercent = //percent left in the gas tank
var gasTank = //Total number of gallons the vehicle holds
var miles = 200; //constant in the equation
//variable needed to calculate the gas left in gallons
var gallonsLeft = gasLeftPercent / 100 * gasTank;
if(gallonsLeft > miles){
	//able to make it to the next station
	console.log("Yes, you can make it without stopping for gas!");
}else{
	//Not able to make it to the next gas station
	console.log("You only have " + gallonsLeft + " gallons of gas in your tank, better get gas now while you can!");
}

