 //assignment -4 ----
//Q-2Write a program to print all even numbers less than or equal to n (n is an input which we take using prompt).

var num = prompt("enter the number");
num = parseInt(num);
for(i=1;i<=num;i++){
  if(i%2==0){
    console.log(i);
}
}