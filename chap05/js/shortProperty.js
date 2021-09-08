"use strict";
/*function makeUser(name, age) { //생성자 메서드
    return{ //객체들을 리턴
        name : name,
        age : age
    };
}*/
function makeUser(name, age) { //생성자 메서드
    return{ //객체들을 리턴
        name,
        age //매개변수와 이름이 같으면 지워도 됨
    };
}
let name = prompt("이름");
let age = prompt("나이");

let object = makeUser(name,age); //makeUser에서 리턴받은 
//name과 age를 객체 object에 할당
alert(object.name);
alert(object.age); //그래서 찍을때 넣어둔 object.해서 찍음