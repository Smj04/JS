// 'use strict';
// let age = 11;
// function test(){
//     age = 43;
// }
// test();
// console.log(age);
'use strict';
let age = 11;
function test(){
    let age = 43;
}
test();
console.log(age);   //전역변수가 우선