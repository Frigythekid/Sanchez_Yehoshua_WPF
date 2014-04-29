//Yehoshua "Josh" Sanchez
//May 1, 2014
//Functions Industrial
//simple calculation to find if the user is ready to keep programming

var studyHours = prompt("How many hours a day have you been studying?");
var studyDays = prompt("How many days have you been studying?");
var studyTotal = studyTime(studyHours, studyDays);
var confident = prompt("How confident are you in your ability?");
(studyTotal >= 60 && confident === "yes") ? console.log("You can keep programming!") : console.log("You should probably go study some more.");
console.log(studyTotal);
function studyTime(h, d){
	return h * d;
}