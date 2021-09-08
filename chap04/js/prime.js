'use strict';
let cnt = 0;
let input = prompt("2부터입력 : ");



outsideFor:
for(let i = 2; i<=input; i++){
  cnt = 0;

for(let j = 2; j<=i; j++){
    if(i%j==0){
        cnt++ ; 
         }
    } 
    if(cnt==1)
       alert(i) ;
     continue outsideFor;
}



