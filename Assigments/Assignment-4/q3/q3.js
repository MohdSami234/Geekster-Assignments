 //Assignment-4 
//Q-3 Write a program to take an input from the user (num) and check whether it is a prime number or not.

var num = prompt("enter the no.");
num = parseInt(num);
factor_count = 0;
for(var i = 1 ; i<=num; i++){
  if(num%i==0){
  factor_count++;
}
}

 

if(factor_count>2){
  alert("given number  is not prome no.");
}
 else{
  alert("given number is  prime no.");
}

