'use strict';
let recipeMap = new Map([
    ['cucumber',500],
    ['tomato',350],
    ['onion',50],
]);

for (let key of recipeMap.keys()) {
    console.log(key);
}

for(let value of recipeMap.values()){
    console.log(value);
}
for(let entry of recipeMap.entries()){
    console.log(entry);
}
recipeMap.forEach((value,key,map)=>{(
    console.log(`key : ${key} value : ${value}`))
});