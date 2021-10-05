'use strict';
let me = {
    firstname : "홍",
    lastname : "길동",

    introduce(){
        console.log(`My hame is ${this.firstname} ${this.lastname}`);


    }
}
me.introduce();
setTimeout(me.introduce, 1000); //setTimeout은 this자리를 window로 할당한다.
//따라서 window는 firstname과 lastname이라는 프로퍼티가 없어서 undefined를 할당하게됨
