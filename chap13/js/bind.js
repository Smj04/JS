'use strict';
//바인드는 내장함수이기 때문에 따로 선언안해도 됨.
let user = {
    firstname : "길동",
    lastname : "홍"
};
function func1(){
    console.log(this.lastname + this.firstname);
}
let funcUser1 = func1.bind(user);           //고정이 된다. 바꿀 수 없다!
funcUser1();
function func2(phrase){
    console.log(phrase + ','+this.lastname + this.firstname);
}


let funcUser2 = func2.bind(user);
funcUser2("Hello");