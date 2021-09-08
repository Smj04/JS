"use strict";
let stationary = prompt("어떤 학용품을 구매하시겠습니까?");

let bag = {
    [stationary] : 10 //기본 10으로 줌
};

alert(bag[stationary]);

let cnt = +prompt("몇개 구입하시겠습니까?"); //숫자타입

bag[stationary] += cnt;

alert(bag[stationary]);