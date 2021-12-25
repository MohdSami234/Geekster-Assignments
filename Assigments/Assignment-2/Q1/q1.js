// Assignment - 2...  
//Take 3 inputs from the user and show minimum of the three

var a = prompt("enter the first no.");
var b = prompt("enter the second no.");
var c = prompt("enter the third no.");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

if(a<=b && a<=c){
alert(a)}
else if(b<=a && b<=c){
alert(b)}
else{
alert(c)}