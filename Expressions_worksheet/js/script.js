//Yehoshua Sanchez April 7, 2014 Expressions Worksheet
//Dog years problem
//Calculate Sparky's age is in dog years
var sparkysAge = 1.5;

//multiply sparkysAge by 7 and apply to dogYears
var dogYears = sparkysAge * 7;

//print out sparkysAge in dog years
console.log("Sparky is " + sparkysAge + " human years old which is " + dogYears + " in dog years.");


//Slice of Pie part 1
//Calculate how many slices of pizza each person will get
var slices = 8;
var people = 10;
var pizzas = 4;

//Multiply pizzas by slices and divide by people and apply to slices eaten
var slicesEaten = pizzas * slices / people;

//print out the number of slices eaten by the people
console.log("Each person ate " + parseInt(slicesEaten) + " slices of pizza at the party." );

//Slice of Pie part 2
//Calculate the number of slice sparky will get
//Use Modulo to get the remainder of the equation in part 1 of the problem
var remainingSlices = pizzas * slices % people;
console.log("Spaky got " + remainingSlices + " slices of pizza.");

//Average shopping bill
//Calculate the average weekly dollar amount spent on groceries over 5 weeks
var groceries = [200, 210, 211, 180, 200];

//Add the amounts of the array and divide by the number of totals to get the average amount spent
var groceryTotal = groceries[0] + groceries[1] + groceries[2] + groceries[3] + groceries[4];
var groceryAvg = groceryTotal / 5;

//Print out the total and average spent on groceries.
console.log("You have spent a total of $" + groceryTotal + " on groceries over 5 weeks. That is an average of $" + groceryAvg + " per week.");

//Calculate the price of an item after discount including the amount before and after tax
var orgnlPrice = 50;
var discount = 10;
var item = "sweater";
var salesTax = 7;

// Multiply the original price by discount as a percentage. Subtract that total from the original price to get the new price
//Multiply the new price by the sales tax as a percentage. Add that total to the new price to get the price with tax
var prcntDiscount = discount / 100;
var prcntSalesTax = salesTax / 100;
var withOutTax = orgnlPrice - orgnlPrice * prcntDiscount;
var withTax = withOutTax + withOutTax * prcntSalesTax;

console.log("Your " + item + " was originally $" + orgnlPrice + ", but after a" + discount + "% discount, it is now $" + withOutTax + " without tax, and $" + withTax + " with tax.");


