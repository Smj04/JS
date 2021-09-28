'use strict';
let recipeMap = new Map([
    ['cucumber',5000],
    ['tomatoes',3500],
    ['onion', 50]
]);
for(let item of recipeMap){
    console.log(item);
}
for(let item of recipeMap.keys()){
    console.log(item);
}

for(let item of recipeMap.values()){
    console.log(item);
}
for(let item of recipeMap.entries()){
    console.log(item);
}
// 배열맵이기 때문에  forEach도 사용가능 앞서 entires()와 다르게 대괄호가 없게 나온다.
recipeMap.forEach(( key, value, set)=>{      
 console.log(`${key} : ${value}`);
 });