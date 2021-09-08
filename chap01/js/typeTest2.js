'use strict';
console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol("id")); //symbol
console.log(typeof Math); //object
console.log(typeof null); //object
console.log(typeof alert); //function
console.log(typeof prompt); //function ->_()형태는 거의 함수다


let testName = "mirim";
console.log(`hello ${1}`);
console.log(`hello ${"testName"}`);
console.log(`hello ${testName}`);
