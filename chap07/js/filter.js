'use strict';
let employee = [
    {id:1, name : "홍길동"},
    {id:2, name : "나미림"},
    {id:3, name : "엄복동"}, //배열안에 객체가 요소됨
    {id:4, name:"신림동"}
];

let fn = function(item, index, employee){
    return item.id == 3; //item의 id가 3인걸 리턴
};
console.log(employee.filter(fn));

let result = employee.filter((item, index, employee) => item.id ==3); //화살표 함수  =>let a = 객체((매개변수)=>(조건); 
   console.log(result);

let a = employee.filter((item, index, employee) => item.id==4);
console.log(a);




