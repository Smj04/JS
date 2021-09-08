'use strict';
let ladder = {
    stop : 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this; //자기자신 메서드를 리턴
    },
    showStop : function(){
        alert(this.step);
        return this;
    }
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

ladder.up().up().down().showStep();