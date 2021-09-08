"use strict";
let id = prompt("id");


if(id != "admin"){
    alert("아이디 오류!");
}


if(id == "admin"){
   let pw = prompt("pw");
    if(pw=="1234"){
       alert("환영");
   }
   else {
       alert("인증 실패!");
   }

}


