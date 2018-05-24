// ai1728 Gustaf Bergqvist
"use strict";
function myFunction() {
	var values = [3, 5, "Jane", true, 144, false];
	
	var last = values.pop();
	
	var newLength = values.unshift('true')

	var last = values.pop(); 

	var newLength = values.unshift(144) 

	var last = values.pop(); 

	var newLength = values.unshift('false') 
	
	var last = values.pop(); 
	var last = values.pop(); 
	var last = values.pop();
var newLength = values.push('Jane');
var newLength = values.push(5);
var newLength = values.push(3);	
	
	console.log(values);
}