'use strict';
//에너그램을 완성 
//for of로 각각 소문잘 바꿈
//split 하고 sort, join으로 붙임

//set으로 동일한 키가있으면 덮어쓰게
//값을 추출

let arr = ["nap","teachers","cheaters","PAN","ear","era","hectares"];


function aclean(arr){
    let map = new Map();
    for (let item of arr) { //item은 배열의 원래값
        let sorted = item   //PAN
        .toLowerCase() //pan
        .split('')  //[p,a,n]
        .sort() //['a','n','p]
        .join('');  //sorted는 하나의 형식으로 정리된 값
        map.set(sorted,item);   //동일한 키가 있는 걍우 덮어쓰게 된다
    }
    return Array.from(map.values());    //값을 추출한다
}
console.log(aclean(arr));   //"nap,teachers,ear나 "PAN, cheacters,era"가 츨력.