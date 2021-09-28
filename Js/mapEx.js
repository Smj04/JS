'use strict';
//who객체를 맵으로 만들어라
let who = {
    name : "홍길동", 
    height : 177
};
let map = new Map(Object.entries(who));
map.get("name");        //get(key)값이 문자열로 들어감


//맵을 who객체로 만들어라 
let who = Object.fromEntries([ ['홍길동', 1 ],
['height' , 177] 
]);
console.log(who);