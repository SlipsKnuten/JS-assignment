// ai1728 Gustaf Bergqvist
"use strict";
function myFunction() {
    var totalNumberofRows = 8;
    var output="";
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output+="#";
        }
        console.log(output);
        output="";
    }
}  