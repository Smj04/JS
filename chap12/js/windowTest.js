'use strict';
alert("Hello");
window.alert("Hi");

var gVar = 5;   //엔진이 윈도우 객체 내부적으로 프로퍼티 생성 => 이름과 동일 충돌
//static 효과
alert(window.gVar); 
window.currentuser = {
    name : "John"
};

let currentuser = "peter";
alert(currentuser); //peter
alert(window.currentuser.name); //John