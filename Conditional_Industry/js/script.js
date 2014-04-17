//Yehoshua "Josh" Sanchez
//Conditionals Industry
//use the scripts to ask the user how many commits they have made, if they've tested the code and if it worked.
alert("So you think you've finished your code?");

var commits = prompt("How many commits have you made?");
if(commits === ""){
	var commits = prompt("You forgot to input something!");
}
var commitsNeed = 20 - commits
if(commits >= 20){
	alert("Great! You have made enough commits.");
	console.log("Great! You have made enough commits.");
}else{
	alert("You need to make at least "+commitsNeed+" more commits.");
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
