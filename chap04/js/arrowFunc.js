"use strict";
function ask(question, yes, no){
    if(confirm(question)) yes();
    else no();
}

ask(
    "동의하세요?",
    ()=> alert("동의"),
    () => alert("취소")

  
);