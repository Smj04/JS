'use strict';
let arr = [5,2,4,-9,34];
function compare(a,b){
    if(b>a) return 1;
    if(b==a) return 0;
    if(b<a) return -1;
}
arr.sort(compare);
let arr2 = arr.slice();//복사
arr2.sort(compare);
console.log(arr2);
