//Yehoshua "Josh" Sanchez
//Conditionals Personal
//script to find if I have done enough Excercise
alert("Hello, I am going to ask you some questions.");//introductory alert
var runMinutes = prompt("How many minutes did you run?");
if(runMinutes === ""){
	var runMinutes = prompt("You forgot to input something!");
}
if(runMinutes > 75){
	alert("That was a nice run!");
}else{
	alert("Great! Next question.");
}

var pushUps = prompt("How many push ups did you do?");
if(pushUps === ""){
	var pushUps = prompt("You forgot to input something!");
}else if(pushUps > 50){
	alert("Well aren't you strong.");
}else{
	alert("Thank you! Just one last question.")
}

var sitUps = prompt("How many sit ups did you do?");
if(sitUps === ""){
	var sitUps = prompt("You forgot to input something!");
}
console.log(runMinutes);
console.log(pushUps);
console.log(sitUps);









