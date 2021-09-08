
let year = prompt("년도 입력");

let check = (year == 2022) ?
function(){
    let age = 18;
    age++;
    alert(age);
} :

function(){
    
    alert("올바른 년도 입력");
};
check();