'use strict';
/*prompt 창을 띄워 숫자 입력 요청 후, 입력 값들을 배열에 저장
숫자가 아닌 값 혹은 빈 문자열을 입력하거나 cancel버튼을 누르면 배열 요소의 합을 계산리턴
*/ 
    function sumInput(){
        let num = [];
        let sum=0;
        while (true) {
        num = prompt("숫자입력 : ");
        
            if(num == "" || num == null){ // 취소버튼이 null  
                return sum; 
            }
            else {
                for(let a of num){ //a가 num배열의 요소
                    sum+= +a; //숫자로 변환 후 계산
                }
            }
        }
    }
    alert(sumInput());
/*while(){
    숫자 입력
if(숫자=="" || 숫자 ==null || !isFinite(숫자))breakl
nymbers.push(+숫자);
}
*/ 