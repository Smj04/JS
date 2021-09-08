'use strict';

let truncate = function(str, num){
    let result = "";
    if(str.length > num){
       result = str.slice(0,num)+'...';
    }
    return result;
 }
console.log(truncate("What I'd like to tell on this topic is:",20));