'use strict';    

let num1="";
let num2="";

let operator="";

let op_value = document.querySelector("#operator");
let result_value = document.querySelector("#result");   //칸

let onClickNumber = (number)=>{     // 반복을 줄여주는 함수
    return (event) => {
        if(operator){   
            if(num2){
            result_value.value ="";
        }
        num2 += number;
    }
        else {
                num1 += number;
        }
        result_value.value += number;  //html요소   number을 복사해서 버튼에 붙어넣기
    }
};      


let onClickOP = (op)=>{     // 덧셈함수
    return (event) => {
        if(num1){   
           operator = op;       //연산을 하기위한 js변수(operator)에 html변수(op)할당.
           op_value.value = op;
        }
        else {
            alert("숫자를 입력하세요.");        
        } 
    }
};
document.querySelector("#num-0").addEventListener("click", onClickNumber(0));  //아이디를 찾아서 버튼을누르면 어떤 기능을 할지 함수
document.querySelector("#num-1").addEventListener("click", onClickNumber(1)); 
document.querySelector("#num-2").addEventListener("click", onClickNumber(2)); 
document.querySelector("#num-3").addEventListener("click", onClickNumber(3)); 
document.querySelector("#num-4").addEventListener("click", onClickNumber(4));   
document.querySelector("#num-5").addEventListener("click", onClickNumber(5)); 
document.querySelector("#num-6").addEventListener("click", onClickNumber(6)); 
document.querySelector("#num-7").addEventListener("click", onClickNumber(7)); 
document.querySelector("#num-8").addEventListener("click", onClickNumber(8)); 
document.querySelector("#num-9").addEventListener("click", onClickNumber(9)); 
document.querySelector("#plus").addEventListener("click", onClickOP('+')); 
document.querySelector("#subtract").addEventListener("click", onClickOP('-'));
document.querySelector("#multiply").addEventListener("click", onClickOP('*'));  
document.querySelector("#divide").addEventListener("click", onClickOP('/')); 
document.querySelector("#clear").addEventListener("click", ()=>{
    num1 = '';
    num2 = '';
    operator = '';

    result_value.value = '';
    op_value.value = '';
}); 
document.querySelector("#calculate").addEventListener("click", ()=>{
    if(num2){   //변수가 2개 있을 때 연산발생 
        switch (operator) {
            case '+': result_value.value = parseInt(num1) + parseInt(num2); break;       //*그냥 더하기 하면 문자열로 취급해서 붙여짐!*
            case '-': result_value.value = num1 - num2; break;
            case '*': result_value.value = num1 * num2; break;
            case '/': result_value.value = num1 / num2; break;
            default break;
        }
    }else{
        alert('숫자를 입력하세요.');
    }
}); 