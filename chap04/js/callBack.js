"use strict";
function ask(question, yes, no){ //semantic
    if(confirm(question)) yes();
    else no();
}

function showOk(){
    alert("동의하셨습니다.")
}

function showNo(){
    alert("동의하지않으셨습니다.")
}
ask("동의하십니까?", showOk, showNo); //ask를 콜백함수라고 부름 나중에 부름