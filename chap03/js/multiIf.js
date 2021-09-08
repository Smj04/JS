'use strict';


let message;
let age = prompt ("나이 입력 : ");
// if(age < 3){
//     message = "아가 안녕";

// }else if(age<18){
//     message = "안녕!";

// }else if(age<100){
//     message = "환영합니다."
// }
// else {
//     message = "나이가 엄청 많네여";
// }
message = (age<3) ? '아가 안녕':
            (age<18) ? '안녕!':
            (age<100) ? '환영합니다.':
            '나이가 엄청 많네여';
alert(message);
