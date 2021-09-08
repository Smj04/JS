//상품명과 가격이 들어있는 객체가 담긴 배열 item이 있다 
//상품의 가격만을 갖는 새로운 purchase를 생성프로그램 작성
'use strict';

let n = {name : "notebook", price : 1000};
let p = {name : "pencil", price : 500};
let e = {name : "eraser", price : 1500};

let item = [n,p,e];

let purchase = function(item, index, array){ //매개변수 이름 상관 X 순서만 정확히 최소1개 가능
    return item.price; //item의 id가 3인걸 리턴
};

console.log(item.map(purchase));

let sum=0;
purchase.forEach((price)=>{
    sum+=price;
});
console.log(sum);
