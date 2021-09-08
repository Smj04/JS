'use strict';

let sum = 0;
let n;


while(1){
    n = prompt("값 입력 : ");
    sum+= +n;
    if(!n) break;
}
alert(sum);

