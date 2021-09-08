'use strict';

let arr = [2,4,56,1,11,34];

function compareNA(a,b){
        if(a>b) return 1;
        if(a==b) return 0;
        if(a<b) return -1;
}
arr.sort(compareNA);
console.log(arr);

function compareND(a,b){
    if(b>a) return 1;
    if(b==a) return 0;
    if(b<a) return -1;
}
arr.sort(compareND);
console.log(arr);

