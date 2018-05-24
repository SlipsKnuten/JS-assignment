// ai1728 Gustaf Bergqvist
"use strict";
function myFunction(){
	 document.getElementById("message-box").className = "success"
}
function myFunction2(){
	 document.getElementById("message-box").className = "error"
}
function myFunction3(){
	 document.getElementById("message-box").className = "info"
}
function myFunction4(){
	var person = prompt("Please enter your item");
    document.getElementById("add-item").innerHTML = person;
    
	var para = document.createElement("li");
	var node = document.createTextNode(person);
	para.appendChild(node);
	var element = document.getElementById("items");
	element.appendChild(para);
}
function lel(elementButton){
	var x = elementButton;
	var parentButton = x.parentNode;
	var pick = confirm("Do you want to delete?");
	if(pick == true){
		parentButton.remove();
	}
}

function lil(){
    var form = document.getElementById("apply-for-pet");

form.addEventListener("submit", function(event) {
    // Genom denna rad så avbryter vi att formuläret skickar oss vidare
    event.preventDefault();
    var text = "";
    var i;
    for (i = 0; i < form.length ;i++) {
            if(form.elements[i].type == "text"){
            text += form.elements[i].value + "\n";
          }
          if(form.elements[i].type == "radio"){
              if(form[i].checked){
                  text += form.elements[i].value + "\n";

              }else{

              }
          }
    }
    console.log(text);
    // Om vi dock vill skicka formuläret vidare (vilket vi ska göra i del 2)
    // så hade vi skrivet följande, denna rad placeras lämpligen också inom
    // en if-sats (t.ex. när vi validerat alla fältens innehåll)

    //event.target.submit();
});
}