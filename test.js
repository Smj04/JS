'use strict';
function fromTo(from, to){
    setInterval(()=>{
        for(let from =1; from <= to; from++){
            console.log(from);
        }
    }),1000;
}
fromTo(1,10);