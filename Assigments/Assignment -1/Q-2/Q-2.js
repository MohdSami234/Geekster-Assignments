// Assignment - 1--Q-2
//Check whether the given chracter is a vowel or not. (Also check for capital characters).

var a = prompt("enter the first no.");
var b = prompt("enter the second no.");
var c = prompt("enter the third no.");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
if(a>=b && a>=c){
console.log("greatest number is " ,a)}
else if(b>=a && b>=c){
console.log("greatest number is ", b)}
else{
console.log("greatest number is ", c)}