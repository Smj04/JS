function makeCounter(){
    let cnt = 0;
    return function(){
        return cnt++;
    }
}
let cnt = makeCounter();
let cnt2 = makeCounter();

console.log(cnt());
console.log(cnt());
console.log(cnt2());
console.log(cnt2());
//0, 1, 0,1   시험에 나옴