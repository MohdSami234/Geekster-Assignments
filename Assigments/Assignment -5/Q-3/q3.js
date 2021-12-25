//Assignment -5
//Q-3 write a program to check the given number is a perfect square or not
var n = prompt("enter the number");
n = parseInt(n);

for(var i=1;i<=n;i++){
    if(i*i == n){
    alert("number is perfect square");
    break;

}
}
   if(i>n){
   alert("number is not perfect square");

}



 