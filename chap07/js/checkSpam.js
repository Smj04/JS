'use strict';
//str에 XXX라는 문자열이 있으면 true 아니면 false를 출력

let checkSpam = function(str){
   let lowerStr = str.toLowerCase();
   return lowerStr.includes('xxx');
     
}
console.log(checkSpam('free xxxxx'));