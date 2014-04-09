//Yehoshua "Josh" Sanchez
//04-9-14 Expressions_Industry
//script to let a locksmith figure out the final price of a job
//need to take the amount of doors per floor and floors per building, also the price per lock

alert("First we need to find out how many locks are in the bulding.");
//alert the user of what will be needed

var floors = prompt("How many floors are in the building")
//Asks the user the number of locks per floor

console.log(floors);

var doorsPerFloor = prompt("How many doors are on each floor?")
//Asks the number of doors per floor

console.log(doorsPerFloor);

var lockPerBuilding = floors * doorsPerFloor
//calculates the number of locks per building by multiplying the number of floors and the number of doors per floor

console.log(lockPerBuilding);

alert("So there are " + lockPerBuilding + " locks in this building.");
//alert to display the number of locks per building

var pricePerLock = prompt("What is the price of each lock?");
//asks the price of each lock









