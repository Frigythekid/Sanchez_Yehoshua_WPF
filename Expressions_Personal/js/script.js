//Yehoshua "Josh" Sanchez
//04-9-14 Expressions_Personal

alert("I need to ask you a few questions."); //nice alert letting user know some questions will be asked
var carGallons = prompt("How many gallons does your vehicle hold?"); //Ask user to enter the amount of gallons in their vehicle
var milesPer = prompt("How many miles per gallon does your vehicle get?"); //Ask user to enter the amount of miles per gallon their vehicle gets
var tripMiles = prompt("How many miles is your trip?"); //Ask user how many miles their trip is
//need expression to calculate the amount of stops needed for the trip
var stops = tripMiles / (carGallons * milesPer); // Multiply carGallons with milesPer and then divide tripMiles by the result of the initial multiplication
console.log(stops); //prints the result of the equation
