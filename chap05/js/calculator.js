'use strict';
let calculator = { //객체
    read() {
        let num1 = +prompt("수입력 1 : ");
        let num2 = +prompt("수입력 2 : ");
    },
    sum(){
        return num1+num2;
    },
    mul() {
        return num1*num2;
    }
}
    calculator.read();
    read(calculator.sum());
    sum(calculator.mul());