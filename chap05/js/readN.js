'use strict';

    let n    
    while (true) {
        n = prompt("숫자 입력");
        if(isFinite(n)==true){   
            //user == undefined || user=="" 
           return Number(n);
            break;
        }
        else {
            return null;
            break;
        }
    }
    readNumber();