'use strict';
let employee = {
    "aaa" : 150,
    "bbb" : 120,
    "ccc" : 180,
}
let sum=0;
for(let item in employee){
   sum+=employee[item];
}
console.log(sum);