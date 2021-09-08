'use strict';
let si = setInterval(()=>{console.log('째깍'), 2000}); //2초후 반복
setTimeout(()=>{clearInterval(si);  
    console.log('정지');}, 5000);