//Yehoshua "Josh" Sanchez
//May 1, 2014
//Functions Wacky
//find out if able to outrun a velociraptor
alert("You are now being chased by a velociraptor.");
//alert to let the user know the situation
var speed = prompt("How fast can you run in ft/s?");
//prompt to get the speed of the user
function velociraptorDistance(s){
	return 1760 - (s * 30)
}
//function to get the result of whether or not the user can outrun a velociraptor
//1760 is the distance a velociraptor can run in 30 seconds
var outRun = velociraptorDistance(speed);//calls the function to get the result
(outRun < 0) ? console.log("Because you ran fast enough you were not caught by the velociraptor.") : console.log("You have been eaten by the velociraptor.");
//if the resulting variable is negative then that means the user has managed to outrun the velociraptor. If positive that means the user was caught.