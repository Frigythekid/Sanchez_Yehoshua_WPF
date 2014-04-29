//Yehoshua "Josh" Sanchez
//May 1, 2014
//Functions Industrial
//simple calculation to find if the user is ready to keep programming

var studyHours = prompt("How many hours a day have you been studying?")
var studyDays = prompt("How many days have you been studying?")
var studyTotal = studyTime(studyHours, studyDays);
console.log(studyTotal);

function studyTime(h, d){
	return h * d;
}