//Yehoshua "Josh" Sanchez
//Conditionals Industry
//use the scripts to ask the user how many commits they have made, if they've tested the code and if it worked.
alert("So you think you've finished your code?");//just an alert asking if the user thinks their code is finished.

var commits = prompt("How many commits have you made?");//prompt to get the initial variable.
if(commits === ""){
	var commits = prompt("You forgot to input something!");//if the answer is empty, then this prompt lets the user know
}
var commitsNeed = 20 - commits//var to use in the alert/console if not enough commits are made
if(commits >= 20){
	alert("Great! You have made enough commits.");
	//if the answer is over 20 then plenty of commits have been made and the user is both alerted and notified in the console.
	console.log("Great! You have made enough commits.");
}else{
	alert("You need to make at least "+commitsNeed+" more commits.");
	//If the answer is lower than 20 then an alert and notification in the console appear that let the user know that x many more commits should be made.
	console.log("You need to make at least "+commitsNeed+" more commits.");
}
 
 var tested = prompt("Did you test your code?");
 if(tested === ""){
 	var tested = prompt("You forgot to input something!")
 }

 (tested === "yes") ? alert("Great just one more question!") : alert("How about you test it out before turning it in.")

 var working = prompt("Did your code work?");
 if(working === "yes"){
 	alert("You are good to turn it in.");
 	console.log("You are good to turn it in.");
 }else{
 	alert("Well maybe you should check and see what's wrong!");
 	console.log("Well maybe you should check and see what's wrong!");
 }
