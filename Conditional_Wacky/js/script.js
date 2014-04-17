//Yehoshua "Josh" Sanchez
//Conditionals Wacky
//script to figure out how many wins you would get as a pitcher

alert("You are a professional pitcher for the Atlanta Braves.")//alert to let the user know what is happening
alert("With just 3 questions I will be able \n to tell you how many wins you will get in one year.");//alert to tell the user what will be figured out

var height = prompt("First things first. \n What is your height in inches.");//prompt to get the variable for height

if(height <= 65){
	alert("You probably won't stand a chance but let's keep going.")
	//if the user is shorter than 65 inches an alert and console notification is displayed stating that the user is a little short
	console.log("You probably won't stand a chance but let's keep going.")
}else if(height >= 89){
	alert("You should probably be playing basketball!");
	//if the user is taller than 89 inches an alert and console notification is displayed stating that the user should be playing basketball
	console.log("You should probably be playing basketball!");
}else{
	alert("That is a good height!");
	//if neither of the heights match than an alert and console notifications is displayed stating that the user is agood height.
	console.log("That is a good height!");
}

var age = prompt("Now that I have your height I want to know how old you are.");//prompt asking the user to enter in their age
if(age <= 17){
	alert("You are very young but we can make it work!");
	//if the age entered is less then 17 than an alert and console notification displays saying the user is very young
	console.log("You are very young but we can make it work!");
}else if(age >= 50){
	alert("You should probably be retired, or worse dead!");
	//if the age entered is greater than 50 then an alert and console notification display stating the user is very old.
	console.log("You should probably be retired, or worse dead!");
}else{
	alert("Alright, let's continue.")
	//if the age does not match any other conditional then an alert and notification appear stating to continue with the question.
	console.log("Alright, let's continue.")
}









