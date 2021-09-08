'use strict';
let menu = { //메뉴 객체
    hamburger : 5000,
    potato : 1000,
    cola : 1000
};

function multiply(menu) { //*2해주는 함수
    for(let key in menu){
        if(typeof(menu[key]) == "number") //number타입 비교
            menu[key]*=2;
    }
}

function PrintMenu(menu) { //출력 함수
    for(let key in menu){
         console.log(key +" : " + menu[key]);
        }
   
}

multiply(menu); //이거 지우면 *2적용X
PrintMenu(menu);