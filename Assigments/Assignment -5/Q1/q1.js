//Assignment -5
//Q-1  Factorial of a number input is 5. factorial of 5 -> 5 * 4 * 3 * 2 * 1 factorial of 7 -> 7 * 6 * 5 * 4 * 3 * 2 * 1 -> Take n from the user and alert the factorial of that number.


// factorial of a number

var num = prompt("enter the number");
var fact =1;
var i =1;
while(i <=num){
     fact = fact*i;
       i++;
}

alert(fact);
