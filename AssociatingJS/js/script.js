//conditional logic

var kidHeight = 47;
var minHeight = 48;
var wParentHeight = 45;

//if the kid is over 48 inches in height
if(kidHeight >= minHeight){
	console.log("You can ride the coaster");
}
else if(kidHeight > wParentHeight){
	console.log("You can ride, but only with a parent present.");
}
else{
		console.log("Sorry kid, you've got some growing to do first.");

}