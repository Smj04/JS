'use strict';


let values = ["Hare", "Krishna","Hare","Krishna",
"Krishna","Krishna","Hare","Hare", ":-O"];

function unique(arr){
    return Array.from(new Set(arr));        //values가 배열이니까 return Array.from(new 셋(매개변수));
}

console.log(unique(values));



