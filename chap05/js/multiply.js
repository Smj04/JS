'use strict';

       function multiply(menu) {
             for(let key in menu){
                 if(typeof(menu[key])=="number")
                 menu[key]*=2;
             }
        }

        let menu = {
            hamburger : 5000,
            potato : 1000,
            cola : 1000,
            option : "선택"
        };
           
        function printMenu(menu) {
            for(let key in menu){
            
              console.log(key + " : "+menu[key]);
            }

            }

        multiply(menu);
        printMenu(menu);