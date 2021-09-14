'use strict';
let me = {
    firstname : "홍",
    lastname : "길동",

    introduce(){
        console.log(`My name is ${this.firstname}${this.lastname}입니다.`);
    }
};
me.introduce(); //동작함
setTimeout(me.introduce, 1000); //동작 안함
//setTimeOut은 저 this를 판단하지X  window로 할당함!!!!!

//해결방법(선언함수)
setTimeout(function(){
    me.introduce();
}, 1000);

//(화살표함수)
setTimeout(()=>me.introduce(),1000);
    me = {
        introduce(){
            console.log("Hi");
        }
    };
