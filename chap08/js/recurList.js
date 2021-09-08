'use strict';
let list = {a : 1};
function li(list){
   console.log(list.value);
   if(list.next) {
       li(list.next);
   }
}

