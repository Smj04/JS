'use strict';
//달러 표시 제거 
let str = "$120";
let extra = function(str){
    return str.slice(1);
}
console.log(extra(str));