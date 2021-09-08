'use strict';
let arr = ["aaa","bbbbbbb","cccccccc"];
let fn = function(item, index, arr){
    return item;
};
console.log(arr.map(fn));

