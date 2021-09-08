'use strict';
/* console.log(null==undefined); //true
console.log(null===undefined);
console.log(null>0);
console.log(null==0);
console.log(null===0);
console.log(null>=0); //true*/


console.log(5>4); //t
console.log("apple" > "pineapple"); //f
console.log("2">"12"); //t
console.log(undefined == null); //t
console.log(undefined === null); //f
console.log(null == "\n0\n"); //타입이면서 값이기 때문에 f --> == null은 오직 undefiend와 동일
console.log(null === +"\n0\n"); //타입이면서 값이기 때문에 f

//null이 연산자로 비교할 시 +0으로 바뀐다