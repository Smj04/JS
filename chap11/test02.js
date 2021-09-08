'use strict';
function Counter(){
    let cnt = 0;
    this.up= function(){
        return ++cnt;
    
    };
    this.down = function(){
        return --cnt;
    };
}
let cnt = new Counter();//렉시컬 환경이 하나
console.log(cnt.up());
console.log(cnt.up());
console.log(cnt.down()); //1,2,1 먼저 증가시켜서 리턴 먼저 감소시켜서 리턴