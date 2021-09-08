'use strict';
let str = "john";
    let ucFirst = function(str){
    if(!str) return str;
   return console.log(str[0].toUpperCase()+str.slice(1));
      
}
ucFirst("john");