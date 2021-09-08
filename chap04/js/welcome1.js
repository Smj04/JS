"use strict";
let age = prompt("나이 입력");
if(age < 18){
    function welcome();
    alert("청소년입니다. 환영합니다.");
} //특정한 코드 블럭안에 정의된 함수는 코드블럭 밖 호출 불가
else{
    function welcome();
    alert("성인입니다. 환영합니다.");
}

welcome();