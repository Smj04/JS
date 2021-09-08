"use strict";

let a = function(){
    alert("Hello"); //alert html 연동
}
a();
// alert(a); alert로 찍으면 함수a의 소스코드가 보임.
let b= a;
let c = a;//b라는 변수에 함수 a를 대입가능
//b가 생김
b();
c();