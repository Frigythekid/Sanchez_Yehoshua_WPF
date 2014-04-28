//Yehoshua "Josh" Sanchez
//May 1, 2014
//Functions Personal
//Script to find how many hours there is left in the day
var hoursLeft = function(s, v, w, sw)//anonymous function with parameters for each of the variables.
{
	var hours = 24 - (s + v + w + sw);//expression to calculate the hours left in the day
	return hours//returns the variable
}

var sleep = prompt("How many hours have you slept?")//prompt to  collect the variable fo the number of hours slept.

var games = prompt("Have you played any video games?")//prompt to ask if any video games were played.

if(games === "yes"){//if yes, then a prompt to collect the hours played in hours
	var videoGames = prompt("How many hours have you played?");
}else{
	var videoGames = 0;//if else, then it sets the value to 0
}

var work = prompt("Have you worked today?");//prompt to ask if user worked

if(work === "yes"){
	var workHours = prompt("How many hours have you worked?");//if yes then a prompt to collect the hours appeared
}else{
	var workHours = 0;//if anything else than the value is set to 0
}
var schoolHours = prompt("How many hours have you spent on school?")//prompt to collect the time in hours worked on school

var timeLeft = hoursLeft(Number(sleep), Number(videoGames), Number(workHours), Number(schoolHours));//variable that calls the function to calculate the hours left in the day.

if(timeLeft < 0){
	console.log("You've run out of hours in the day. You are at "+timeLeft+" hours.");//if hours is less than 0 than the console states that time has run out in the day
}else if(timeLeft >= 12){
	console.log("You have plenty of time left. You have "+timeLeft+" hours left in the day.")//if 12 or more hours are left than the console sates that there is plenty of time left
}else{
	console.log("You have "+timeLeft+" hours left in the day.")//anything else just states the time left in the day
}










