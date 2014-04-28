//Yehoshua "Josh" Sanchez
//May 1, 2014
//Functions Personal
//Script to find how many hours there is left in the day
var hoursLeft = function(s,v, w){
	var hours = 24 - (s + v + w);
	return hours
}

var sleep = prompt("How many hours have you slept?")

var games = prompt("Have you played any video games?")

if(games === "yes"){
	var videoGames = prompt("How many hours have you played?");
}