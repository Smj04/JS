'use strict';
let x = 'xxx'; //전역

function test(){
    let y = 'yyy'; //선언함수

    function bar(){
        let z = 'zzz';
        alert(x+y+z);
    }
    bar();
}
test();