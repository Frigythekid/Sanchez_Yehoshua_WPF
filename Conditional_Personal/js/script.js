//Yehoshua "Josh" Sanchez
//Conditionals Personal
//script to find if I have done enough Excercise
alert("Hello, I am going to ask you some questions.");//introductory alert
var runMinutes = prompt("How many minutes did you run?");//prompt to get the first variable
if(runMinutes === ""){
	//If the varibale is empty, put another prompt asking for the variable
	var runMinutes = prompt("You forgot to input something!");
}
else if(runMinutes > 75){
	alert("That was a nice run!");//if the run is over 75 min an alert appears saying it was a nice run.
}

alert("Great! Next question.");//random alert that lets the user know that there is another question.

var pushUps = prompt("How many push ups did you do?");//prompt to get the second variable.
if(pushUps === ""){
	//if variable is empty, another prompt to collect the secong variable
	var pushUps = prompt("You forgot to input something!");
}else if(pushUps > 50){
	//if 2nd variable is over 50 an alert appears 
	alert("Well aren't you strong.");

}

alert("Thank you! Just one last question.")//courtesy alert that there is one last question


var sitUps = prompt("How many sit ups did you do?");//prompt to get the 3rd variable
if(sitUps === ""){
	//if the variable is empty a prompt appears saying that it is.
	var sitUps = prompt("You forgot to input something!");
}else if(sitUps > 75){
	//if the varibale is over 75 an alert appears saying "Great work!"
	alert("Great work!")
}

var totalUps = Number(sitUps) + Number(pushUps);//adds the 2nd and 3rd variable into one

if(runMinutes >= 45 && totalUps >= 75){
	//if the run minutes is greater than or equal to 45 AND the total "ups" are greater than or equal to 75 than a alert appears saying that plenty of excercise was done.
	alert("You have done " + totalUps + " sit ups and push ups. You also ran " + runMinutes + " minutes, that is plenty of excercise, now go get some rest!");
}else if(runMinutes >= 90 || totalUps >= 125){
	//if the run minutes is greater than or equal to 90 OR the toal "ups" are greater than or equal to 125 an alert appears saying that plenty of excercise was done
	alert("You have done plenty of excercise, now get some rest!");
}else{
	//if neither condition is true than alert appears saying more excercise should be done.
	alert("Hmm...Maybe you should try working out a bit more.");
}

if(runMinutes >= 45 && totalUps >= 75){
	//if the run minutes is greater than or equal to 45 AND the total "ups" are greater than or equal to 75 than the console says that plenty of excercise was done.
	console.log("You have done " + totalUps + " sit ups and push ups. You also ran " + runMinutes + " minutes, that is plenty of excercise, now go get some rest!");
}else if(runMinutes >= 90 || totalUps >= 125){
	//if the run minutes is greater than or equal to 90 OR the toal "ups" are greater than or equal to 125 the console says that plenty of excercise was done
	console.log("You have done plenty of excercise, now get some rest!");
}else{
	//if neither condition is true than the console says more excercise should be done.
	console.log("Hmm...Maybe you should try working out a bit more.");
}







