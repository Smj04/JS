"use strict";
alert("메뉴를 입력하시오 ");
alert("1. 피자 2. 치킨 3. 떡볶이");
let choice = prompt("번호 입력");
switch(+choice){
case 1: 
alert("피자를 선택했습니다!");
case 2: 
alert("치킨을 선택했습니다!");
case 3: 
alert("떡볶이를 선택했습니다!");

default :("다시 입력");
};