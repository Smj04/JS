'use strict';
//str문자열에서 "er"을 모두 검색하는 예제를 작성하시오.
let str = "Where there is a will there is a way";
let answer = [];
let loc = 0;

while(true){
    let res = str.indexOf("er",loc);
    if(res==-1) break;
    answer.push(res);
    loc+=++res;
}
console.log(answer);
