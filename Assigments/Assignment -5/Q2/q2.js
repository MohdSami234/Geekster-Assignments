//Assignment -5
//Q-2 take n from user and print first n prime numbers.

var n = prompt("enter the number");
n = parseInt(n);
  
for(var i=2;i<=n;i++){
     var fact =0;
   
    
    for(var j=1;j<=i;j++){
       if(i%j==0){
         fact++;
        }
}
        if(fact<=2){
        console.log(i);
       
           
}
}
 