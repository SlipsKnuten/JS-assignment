// ai1728 Gustaf Bergqvist
"use strict";
function myFunction() {
	var countries = ["Sweden", "Denmark", "Finland", "Norway"];
	var string;
	var sum;
	
	var string = countries.toString();
	alert(string.length);
	
	var sum = string.length;
	console.log(sum /= 4);
	
	document.getElementById("demo1").innerHTML = "All countries: " + countries;

	var lel = countries[1].toString();
	var res = lel.substring(0,3);
	document.getElementById("demo2").innerHTML = res;
}