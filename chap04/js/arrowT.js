"use strict";
function ask(qu,yes,no){
    if(confirm(qu))   yes()
    else no();
}
ask{
    "동의하십니까?",
   () => alert("동의하셨습니다");
     () => alert("취소버튼을 누르셨습니다.");
}

