'use strict';
//두개의 숫자를 합쳐서 문자열로 나열하는 함수 concate(num1,num2);를 작성하시오.
//예) concat(123,456)= 123456

function concate(num1,num2){
    //숫자를 문자열로 변환
    return num1.toString() + num2.toString(); //합치기
}
console.log(concate(2,5));