'use strict';

let menu = {
    hamburger : 5000,
    potato : 1000,
    cola : 1000,
    option : "선택"
};


function multiply(menu) { //객체를 넣음
    for(let key in menu){
       menu[key]*=2;
    }
}

function printMenu(menu) {
    for(let key in menu){
        if(typeof(menu[key])==typeof(number)){
        console.log(key+" : "+ menu[key]);
    }
}
}
multiply(menu);
printMenu(menu);