// Yehoshua "Josh" Sanchez 04-14-2014 Conditionals Worksheet

//Last Chance for Gas!
//Is there enough gas left to make it to the next gas station 200 miles away
//variables needed to complete the expression
var mpg = 15;//variable for the amount of miles the car gets per gallon
var gasLeftPercent = 40//percent left in the gas tank
var gasTank = 20;//Total number of gallons the vehicle holds
var miles = 200; //constant in the equation
//variable needed to calculate the gas left in gallons
var gallonsLeft = gasLeftPercent / 100 * gasTank;
if(gallonsLeft * mpg > miles){
	//able to make it to the next station
	console.log("Yes, you can make it without stopping for gas!");
}else{
	//Not able to make it to the next gas station
	console.log("You only have " + gallonsLeft + " gallons of gas in your tank, better get gas now while you can!");
}

//Check the Login
//are the username AND password both entered correctly
//all variables needed
var usernameEntered = "ABCD"; //Variable for the username entered as a string
var passwordEntered = "ABCD"; // Variable for password entered as a string
var correctUsername = "ABCD"; // Correct username as a string
var correctPassword = "ABCD"; // Correct password as a string
//equation needed using the "and" operator to make sure both the username entered and password entered match
if(usernameEntered === correctUsername && passwordEntered === correctPassword){
//print out for both matching
console.log("Welcome, " + correctUsername + "!");
}

//conditional if usernameEntered doesn't match
if(usernameEntered != correctUsername){
	//print out for only the username being incorrect
	console.log("User not found. Try again.");
}

//conditional for username being correct but password being incorrect
if(usernameEntered === correctUsername && passwordEntered != correctPassword){
	//printout for the above condition
	console.log("Password does not match our records.");
}














