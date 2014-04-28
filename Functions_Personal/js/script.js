//Yehoshua "Josh" Sanchez
//May 1, 2014
//Functions Personal
//Script to find how many hours there is left in the day
var hoursLeft = function(s, v, w, sw){
	var hours = 24 - (s + v + w + sw);
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

console.log(timeLeft);

