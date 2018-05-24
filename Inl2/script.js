// ai1728 Gustaf Bergqvist
"use strict";

//upg 1

function findMax() {
    var i;
    var max = -Infinity;
    for(i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
} 
document.getElementById("demo").innerHTML = findMax(4, 5, 7);


function findMin() {
    var i;
    var min = 5;
    for(i = 0; i < arguments.length; i++) {
		if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
} 
document.getElementById("demo2").innerHTML = findMin(4, 5, 7);

//upg 2
function range(x){
	var a = [];
	for (var i = 0; i < x; i++){
		a.push(i);
	}
	return a;
}
document.getElementById("demo3").innerHTML = range(5);

//upg 3
function sumAll() {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
} 
document.getElementById("demo4").innerHTML =
sumAll(5, 10, 15, 20, 25);

//upg 4
function countCharacter(x,y){
	var counter = 0;
	for (var i = 0; i < x.length; i++){
		if(x[i] == y){
			counter = counter + 1;
		}
	}
	return counter;
}

var testString1 = "Jane Doe";
var testString2 = "Abracadabra";

document.getElementById("demo7").innerHTML =
countCharacter(testString1, "e");

document.getElementById("demo8").innerHTML =
countCharacter(testString2, "a");

//upg 5
function palindrome(s,i) {
 return(i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&palindrome(s,++i);
}
document.getElementById("demo5").innerHTML =
palindrome("sirap - paris");
document.getElementById("demo6").innerHTML =
palindrome("lorem - ipsum");

//upg 7
var person = {
    firstName: "Gustaf",
    lastName : "Bergqvist",
    age      : 50,
    family   : ["Tom","Lena","Gustaf"]
    };
    function printPerson(a){
        // console.log("asd");
        Object.keys(a).forEach(key => {
           document.getElementById("demo9").innerHTML += "<p>"+person[key]+"</p>";
            // console.log(key);          // the name of the current key.
            // console.log(person[key]);   // the value of the current key.
        });
    };
	
//upg 8
var box = createBox(15,20);
function createBox(x,y) {
  var obj = {
    height:  x,
    width: y
  };
  return obj;
}
document.getElementById("demo10").innerHTML +=
box.height;
document.getElementById("demo11").innerHTML +=
box.width;

//upg 9

var triarea = function(side1,side2,side3) {
	var p = (side1+side2+side3)/2;
	var a = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
  return a;
}

document.getElementById("demo12").innerHTML =
triarea(11,9,9);
//upg 10

function attributes(obj){
	var keys = [];
	for(var key in obj){
    keys.push(key);
   }
   return keys;
}

var testObject1 = {
	width:15,
	height: 20
}

var testObject2 = {
	a:1,
	b:2,
	c:3
}

var attrsFromObject1 = attributes(testObject1);
var attrsFromObject2 = attributes(testObject2);


document.getElementById("demo13").innerHTML =
attrsFromObject1;

document.getElementById("demo14").innerHTML =
attrsFromObject2;
