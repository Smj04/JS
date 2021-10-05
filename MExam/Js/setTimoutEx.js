'use strict';
function sayHi(){
    console.log("안녕하세요");
}
setTimeout(sayHi,5000);

function sayHiname(who, phrase){
    console.log(who+'님, '+phrase);
}
let st1 = setTimeout(sayHiname, 1000, "홍길동", "안녕하신가!");
clearTimeout(st1);
