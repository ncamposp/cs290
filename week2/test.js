var x = addFiveAlt(10);

function addFiveAlt(x){
	return x + 5;
}
console.log("This example above DOES work: ", x);
console.log("----------------------------------");

var y = addFive(10);
var addFive = function (x){
	return x + 5;
}
console.log("This example above does NOT work: ", y);
