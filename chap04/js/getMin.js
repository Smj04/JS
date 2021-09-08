"use strict";
let num1 = +prompt("첫번째 수");
let num2 = +prompt("두번째 수");


function getPow(x, n){
   let pow=1;
   for(let i=0; i<n; i++){
       pow*=x;
   }
   return pow;
}
getPow(num1, num2);


// getMin(a,b);

// function getMin(a,b){
//     if(a>b){
//        return alert(b);
//     }
//   else
//   return alert(a);
// }

