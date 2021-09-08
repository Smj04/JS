'use strict';
function sayHi(){
    console.log("안녕하세요.");

}
setTimeout(sayHi, 5000); //밀리터리초 지정 5초뒤

function sayHiname(who, phrase){
    console.log(who+' 님,'+phrase);
}
setTimeout(sayHiname, 3000, "홍길동", "안녕하세요");

let st1 = setTimeout(function sayHello(){
 console.log("안녕하세요!!!!") ;
}, 2000);       //2초
st1;
// clearTimeout(st1); 메모리 사용을 잡아먹어서 필요없으면 꼭 해주기