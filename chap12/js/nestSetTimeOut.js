'use strict';
let timerId = setTimeout(function clock(){
    let today = new Date();
    let now  = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;
    console.log(now);
    timerId = setTimeout(clock, 1000); //setTimeout으로 해야한다.
}, 1000);