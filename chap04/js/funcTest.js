"use strict";

setValue(10,20);

function setValue(one, two){
    let total = one + two;
    console.log(total);
} //함수가 호출하고 선언 순서 상관x
//브라우저 엔진이 태그, 전역변수 순으로 읽어옴.
function showMessage(from){
    console.log(from);
}
showMessage("홍길동"); //동작X

function showMessage2(from, text = "환영합니다."){
    console.log(from+text);
}
showMessage2("홍길동"); //이름이 같으면 맨 아래거만기억 실행
//오버라이딩하면 맨아래것만 기억 에러X

function showCount(count){
    console.log(count ?? "unknown");
}
showCount(); //??는 첫번째 값을 가지고 옴

function getPoint(){
    return 10*20;
}
let result = getPoint();
console.log(result);