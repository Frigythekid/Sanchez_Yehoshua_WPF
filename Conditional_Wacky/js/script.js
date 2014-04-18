//Yehoshua "Josh" Sanchez
//Conditionals Wacky
//script to figure out how many wins you would get as a pitcher

alert("You are a professional pitcher for the Atlanta Braves.")//alert to let the user know what is happening
alert("With just 2 questions I will be able \n to tell you how many wins you will get in one year.");//alert to tell the user what will be figured out

var height = prompt("First things first. \n What is your height in inches.");//prompt to get the variable for height

if(height <= 65){
	alert("You probably won't stand a chance but let's keep going.");
	//if the user is shorter than 65 inches an alert and console notification is displayed stating that the user is a little short
	console.log("You probably won't stand a chance but let's keep going.");
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
}else if(age >= 40){
	alert("You should probably be retired, or worse dead!");
	//if the age entered is greater than 50 then an alert and console notification display stating the user is very old.
	console.log("You should probably be retired, or worse dead!");
}else{
	alert("Alright, now to figure out how many wins you'll get.")
	//if the age does not match any other conditional then an alert and notification appear stating to continue with the question.
	console.log("Alright, now to figure out how many wins you'll get.")
}

if(age > 17 && age < 40){
	//if the age is greater than 17 AND less than 40 than the user would get atleast 10 wins because of that.
	win1 = 10;
}else if(age <= 17){
	//if the age is 17 or less than the user will only get 6 wins bc of it
	win1 = 6;
}else{
	//if neither matches than the user would only get 3, this would happen with age being greater than 40
	win1 = 3;
}

if(height > 65 && height < 89){
	//if the user enters a height greater than 65 but less than 89 than the user will get 10 wins because of it
	win2 = 10;
}else if(height <= 65){
	//if the user enters height equal too or less than 65 than the user will only get 4 wins because of it
	win2 = 4;
}else{
	//if taller than 89 the user will get 5 wins
	win2 = 5;
}

var totalWins = Number(win1) + Number(win2)//this adds the wins given from the height and age variables.
 
 if(totalWins === 20){
 	alert("Congratulations! You are an ace and ended with "+totalWins+" wins.");
 	console.log("Congratulations! You are an ace and ended with "+totalWins+" wins.");
 }else if(totalWins < 12){
 	alert("You weren't the best, but you still managed to get "+totalWins+" wins.");
 	console.log("You weren't the best, but you still managed to get "+totalWins+" wins.");
 }else{
 	alert("You had a decent year and ended with "+totalWins+" wins.");
 	console.log("You had a decent year and ended with "+totalWins+" wins.");
 }

console.log(win1);
console.log(win2);
console.log(totalWins);




