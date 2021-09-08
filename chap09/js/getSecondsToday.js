//오늘 하루가 시작된지 몇초가 지났는지 반환하는 함수 getSeconds()
'use strict';


function getSecondsToday(){
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let difference = now - today;
    return Math.round(difference/1000);
}
console.log(getSecondsToday());