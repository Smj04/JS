'use strict';

let list = ["A", "B", "C"];

let fn = function(item, index, list){
    console.log(item + ":"+index+":"+list); //함수표현식
}
list.forEach(fn);

list.forEach((item, index, list) => { //화살표 함수 
    console.log(item + ":"+index+":"+list); 
})