"use strict";
let age = prompt("나이 입력");

console.log(age);

function CheckAge(a){ //매개변수는 지역변수 
    if(a>=18){
        return true;
    }
    else {
        confirm("재인증");
        return ;
    }
}

