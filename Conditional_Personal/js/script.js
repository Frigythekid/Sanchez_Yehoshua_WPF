//Yehoshua "Josh" Sanchez
//Conditionals Personal
//script to find if I have done enough Excercise
alert("Hello, I am going to ask you some questions.");//introductory alert
var runMinutes = prompt("How many minutes did you run?");
if(runMinutes === ""){
	var runMinutes = prompt("You forgot to input something!");
}
else if(runMinutes > 75){
	alert("That was a nice run!");
}

alert("Great! Next question.");


var pushUps = prompt("How many push ups did you do?");
if(pushUps === ""){
	var pushUps = prompt("You forgot to input something!");
}else if(pushUps > 50){
	alert("Well aren't you strong.");
}

alert("Thank you! Just one last question.")


var sitUps = prompt("How many sit ups did you do?");
if(sitUps === ""){
	var sitUps = prompt("You forgot to input something!");
}else if(sitUps > 75){
	alert("Great work!")
}

var totalUps = Number(sitUps) + Number(pushUps);

if(runMinutes >= 45 && totalUps >= 75){
	alert("You have done " + totalUps + " sit ups and push ups. You also ran " + runMinutes + " minutes, that is plenty of excercise, now go get some rest!");
}else if(runMinutes >= 90 || totalUps >= 125){
	alert("You have done plenty of excercise, now get some rest!");
}else{
	alert("Hmm...Maybe you should try working out a bit more.");
}

if(runMinutes >= 45 && totalUps >= 75){
	console.log("You have done " + totalUps + " sit ups and push ups. You also ran " + runMinutes + " minutes, that is plenty of excercise, now go get some rest!");
}else if(runMinutes >= 90 || totalUps >= 125){
	console.log("You have done plenty of excercise, now get some rest!");
}else{
	console.log("Hmm...Maybe you should try working out a bit more.");
}







