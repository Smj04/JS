'use strict';
function getWeekDay(date){
    let days = ["Sun","Mon", "Tue", "Wed","Thu","Fri","sat"]
     return days[date.getDay()];          //0은 일요일
    //  let days = ["Sun","Mon", "Tue", "Wed","Thu","Fri","sat"]
    //  return days[date.getDay()+1];          //0은 일요일 
}
let someday = new Date(2021, 1, 1);
console.log(getWeekDay(someday));