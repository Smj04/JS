'use strict';
function mul(a, b) {
    return a * b;
}
let double = mul.bind(null, 2);     //2가 bind함수로 인해  고정됨
console.log(double(3));
console.log(double(4));
console.log(double(5));