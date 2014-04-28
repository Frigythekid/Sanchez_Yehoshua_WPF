//Yehoshua "Josh" Sanchez
//May 1, 2014
//Functions Personal
//Script to find how many hours there is left in the day
var hoursLeft = function(s, v, w, sw)//anonymous function with parameters for each of the variables.
{
	var hours = 24 - (s + v + w + sw);//expression to calculate the hours left in the day
	return hours
}

var sleep = prompt("How many hours have you slept?")

var games = prompt("Have you played any video games?")

if(games === "yes"){
	var videoGames = prompt("How many hours have you played?");
}else{
	var videoGames = 0;
}

var work = prompt("Have you worked today?");

if(work === "yes"){
	var workHours = prompt("How many hours have you worked?");
}else{
	var workHours = 0;
}
var schoolHours = prompt("How many hours have you spent on school?")

var timeLeft = hoursLeft(Number(sleep), Number(videoGames), Number(workHours), Number(schoolHours));

if(timeLeft < 0){
	console.log("You've run out of hours in the day. You are at "+timeLeft+" hours.");
}else if(timeLeft > 12){
	console.log("You have plenty of time left. You have "+timeLeft+" hours left in the day.")
}else{
	console.log("You have "+timeLeft+" hours left in the day.")
}










